


// Displays page while also hiding the others 
var currentPage = 0;
function showPage(pageNumber) {
    var pages = document.querySelectorAll('[id^="page"]');
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    document.getElementById('page' + pageNumber).style.display = 'inline-block';

    var backButton = document.querySelector('.back-page-symbol');
    if (pageNumber > 1) {
        backButton.style.display = 'inline-block';
    } else {
        backButton.style.display = 'none';
    }

    if (pageNumber >= 2) {
        document.body.classList.add('back-page');
    } else {
        document.body.classList.remove('back-page');
    }

    currentPage = pageNumber;
    storeCurrentPage(pageNumber);
}


// Displays the previous page
document.addEventListener('DOMContentLoaded', function() {
    var backButton = document.querySelector('.back-page-symbol');

    backButton.addEventListener('click', function() {
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    });
});

// Stores the current page in local storage
function storeCurrentPage(pageNumber) {
    localStorage.setItem('currentPage', pageNumber);
}


// Displays page where the user left off
document.addEventListener('DOMContentLoaded', function() {
    var storedPage = localStorage.getItem('currentPage');
    if (storedPage !== null) {
        showPage(parseInt(storedPage));
    }
});

// Displays button in p-1
document.addEventListener('DOMContentLoaded', function () {
    function showbutton() {
        var elements = ['text-wrapper-3-p1', 'text-wrapper-4-p1'].map(function (className) {
            return document.querySelector('.' + className);
        });

        elements.forEach(function (element, index) {
            element.addEventListener('click', function () {
                document.querySelector('.button-container-p1').style.display = 'inline-flex';
                element.classList.add('clicked');
                elements[1 - index].classList.remove('clicked');
            });
        });

    
    }
    showbutton();
});


// Displays button in p-2
document.addEventListener('DOMContentLoaded', function() {
    var inputField = document.querySelector('input[type="text"]');
    var buttonContainer = document.querySelector('.button-container-p2');

    inputField.addEventListener('input', function() {
        if (inputField.value !== '' && inputField.value === inputField.value.toUpperCase()) {
            buttonContainer.style.display = 'inline-flex';
            buttonContainer.style.left = '26vw';
        } else {
            buttonContainer.style.display = 'none';
        }
    });
});


// Displays button in p-3
document.addEventListener('DOMContentLoaded', function() {
    var inputField = document.querySelector('#lastrelationship'); 
    var buttonContainer = document.querySelector('.button-container-p3'); 

    inputField.addEventListener('input', function() {
        if (inputField.value.length > 0) {
            buttonContainer.style.display = 'inline-flex';   
        } else {
            buttonContainer.style.display = 'none';
        }
    });
});


// Displays button in p-4
document.addEventListener('DOMContentLoaded', function() {
    var selectField = document.querySelector('.select-container-p4');
    var buttonContainer = document.querySelector('.button-container-p4');

    selectField.addEventListener('change', function() {
        if (selectField.value !== '' && selectField.value !== 'PLACEHOLDER') {
            buttonContainer.style.display = 'inline-flex';
        } else {
            buttonContainer.style.display = 'none';
        }
    });
});



// Displays button in p-5
document.addEventListener('DOMContentLoaded', function () {
    function showbutton() {
        var elements = ['text-wrapper-3-p5', 'text-wrapper-4-p5'].map(function (className) {
            return document.querySelector('.' + className);
        });

        elements.forEach(function (element, index) {
            element.addEventListener('click', function () {
                document.querySelector('.button-container-p5').style.display = 'inline-flex';
                element.classList.add('scaled');
                elements[1 - index].classList.remove('scaled');
            });
        });

    
    }
    showbutton();
});


// Displays button in p-6
document.addEventListener('DOMContentLoaded', function() {
    var inputField = document.querySelector('#page6 input'); 
    var buttonContainer = document.querySelector('.button-container-p6');

    inputField.addEventListener('input', function() {
        if (inputField.value.length >= 3) {
            buttonContainer.style.display = 'inline-flex';
            buttonContainer.style.left = '26vw';    
        } else {
            buttonContainer.style.display = 'none';
        }
    });
});

// Displays button in p-7
document.addEventListener('DOMContentLoaded', function() {
    var selectField = document.querySelector('.select-container');
    var buttonContainer = document.querySelector('.button-container-p7');

    selectField.addEventListener('change', function() {
        if (selectField.value !== '' && selectField.value !== 'PLACEHOLDER') {
            buttonContainer.style.display = 'inline-flex';
        } else {
            buttonContainer.style.display = 'none';
        }
    });
});

// Hides animation frames in p-8
window.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('#image-animation img');
    for (var j = 1; j < images.length; j++) {
        images[j].style.display = 'none';
    }
});


// Animation in p-8
function startAnimation() {
    var images = document.querySelectorAll('#image-animation img');
    var currentIndex = 0;

    function nextImage() {
        images[currentIndex].style.display = "none"; 

        if (currentIndex === images.length - 2) {
            clearInterval(animationInterval);
            images[currentIndex + 1].style.display = "inline-block"; 
            return; 
        }

        currentIndex = (currentIndex + 1) % images.length; 
        images[currentIndex].style.display = "inline-block";
    }

    var animationInterval = setInterval(nextImage, 120); 
 }






// Animal Carroussel in p-9    
var index = 0;
var animalContainers = document.querySelectorAll('.animal-container');

for (var i = 0; i < animalContainers.length; i++) {
    animalContainers[i].style.display = 'none';
}

animalContainers[0].style.display = 'inline-flex';

function nextanimal() {
    animalContainers[index].style.display = 'none';

    index = (index + 1) % animalContainers.length;

    animalContainers[index].style.display = 'inline-flex';
}

function prevanimal() {
    animalContainers[index].style.display = 'none';

    index = (index - 1 + animalContainers.length) % animalContainers.length;

    animalContainers[index].style.display = 'inline-flex';
}


// Animal Scalled and arrow hide in p-9
document.getElementById('prevButton').addEventListener('click', prevanimal);
document.getElementById('nextButton').addEventListener('click', nextanimal);

document.addEventListener('DOMContentLoaded', function() {
    var animalContainers = document.querySelectorAll('.animal-container');
    var prevButton = document.querySelector('#prevButton');
    var nextButton = document.querySelector('#nextButton');

    animalContainers.forEach(function(container) {
        var image = container.querySelector('.image');
        var input = container.querySelector('.animal-name');

        image.addEventListener('click', function() {
            input.checked = !input.checked;
            image.style.transform = 'scale(1.1)'; 
            image.classList.toggle('clicked'); 
            
            if (input.value !== '' && input.checked) {
                document.querySelector('.button-container-p9').style.display = 'inline-flex';
                prevButton.style.display = 'none';
                nextButton.style.display = 'none';
            } else {
                document.querySelector('.button-container-p9').style.display = 'none';
                prevButton.style.display = 'inline-block';
                nextButton.style.display = 'inline-block';
            }
        });
    });
});

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  const formData = new FormData(form); 
  const obj = Object.fromEntries(formData); 
  console.log(obj);

  const json = JSON.stringify(obj);
  localStorage.setItem('form', json);
  window.location.href = 'match2.html';
});

function myONClickFN(){
    document.location.href = "match2.html";
}

