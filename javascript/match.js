// Clear localStorage on page unload
window.addEventListener('beforeunload', function () {
    localStorage.clear();
});

// Clear localStorage if navigating to register.html
if (window.location.pathname === '/register.html') {
    localStorage.clear();
}

if (window.location.pathname === '/index.html') {
    localStorage.clear();
}

// Function to fetch a random user from the API based on sexual preference and update HTML content
function fetchRandomUser() {
    // Fetch form data from localStorage
    const json = localStorage.getItem('form');
    const obj = json ? JSON.parse(json) : {};
    const characteristic = obj.characteristic || 'Short-Sighted'; // Default characteristic if not in localStorage
    const sexualpreference = obj.sexualpreference;

    // Determine the API URL based on sexual preference
    let apiUrl = 'https://randomuser.me/api/';
    if (sexualpreference === 'WOMAN') {
        apiUrl = 'https://randomuser.me/api/?gender=female';
    } else if (sexualpreference === 'MAN') {
        apiUrl = 'https://randomuser.me/api/?gender=male';
    }

    // Fetch random user data
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const fullName = `${user.name.first} ${user.name.last}`;
            const picture = user.picture.large;

            // Update HTML content with user data and form characteristic
            document.getElementById('data').innerHTML = `
                <img src="${picture}" alt="User" class="image" style="width: 30vw; height: auto;">
                <span>${fullName}</span>
                <div class="match-details">
                  <b>${characteristic}</b>
                </div>
            `;
        })
        .catch(error => console.error('Error fetching random user:', error));
}

// Fetch a random user on initial load
fetchRandomUser();

// Add event listeners for right and left buttons
document.getElementById('right-button').addEventListener('click', function (event) {
    event.preventDefault();
    fetchRandomUser();
});

document.getElementById('left-button').addEventListener('click', function (event) {
    event.preventDefault();
    fetchRandomUser();
});

// Function to display additional characteristics from localStorage
function displayAdditionalCharacteristics() {
    const json = localStorage.getItem('form');
    if (json) {
        const obj = JSON.parse(json);
        const sexualpreference = obj.sexualpreference || 'N/A';

        let markup = '';

        if (obj.characteristic !== undefined) {
            markup += `
                <div>
                    <span>Characteristic: ${obj.characteristic}</span>
                </div>`;
        }

        if (sexualpreference !== undefined) {
            markup += `
                <div>
                    <span>Sexual Preference: ${sexualpreference}</span>
                </div>`;
        }

        document.getElementById('additional-data').innerHTML = markup;
    }
}

// Display additional characteristics on initial load
displayAdditionalCharacteristics();
