document.addEventListener("DOMContentLoaded", function() {
    let index = 0;
    const images = document.querySelectorAll('.carrossel .rectangle');
    const quant = images.length;

    //ADICIONAR TEXTO
    const texto = [
      "MAN EATS",
      "MAN EATS",
      "MAN EATS",
      "MAN EATS WITH",
      "MAN EATS WITH",
      "MAN EATS WITH",
      "MAN EATS WITH",
      "MAN EATS WITH",
    ];

    const textwrapper = document.querySelector('.text-wrapper-7');
    const womanTextWrapper = document.querySelector('.text-wrapper-8');

    document.getElementById('next').addEventListener('click', function() {
      images[index].style.display = 'none';
      index = (index + 1) % quant;
      images[index].style.display = 'block';
      textwrapper.textContent = texto[index];

      // Check the index and update the text in .text-wrapper-8 if index is 3
      if (index >= 3) {
        womanTextWrapper.textContent = "WOMAN";
      } else {
        womanTextWrapper.textContent = "ALONE";
      }
    });

    document.getElementById('prev').addEventListener('click', function() {
      images[index].style.display = 'none';
      index = (index - 1 + quant) % quant;
      images[index].style.display = 'block';
      textwrapper.textContent = texto[index];

      // Check the index and update the text in .text-wrapper-8 if index is 3
      if (index >= 3) {
        womanTextWrapper.textContent = "WOMAN";
      } else {
        womanTextWrapper.textContent = "ALONE";
      }
    });

    images.forEach((img, imgIndex) => {
      if (imgIndex !== 0) img.style.display = 'none';
    });

    textwrapper.textContent = texto[0];
    womanTextWrapper.textContent = "ALONE";  // Initialize .text-wrapper-8 with "WOMAN"
});
