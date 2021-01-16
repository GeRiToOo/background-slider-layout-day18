const body = document.body;
const left = document.querySelector('#left');
const right = document.querySelector('#right');
const slides = document.querySelectorAll('.slide');

let activeSlide = 0;

right.addEventListener('click', () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setBackgroundBody();
  setActiveSlide();
});

left.addEventListener('click', () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setBackgroundBody();
  setActiveSlide();
});

const setBackgroundBody = () => {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
};

const setActiveSlide = () => {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[activeSlide].classList.add('active');
};

setBackgroundBody();
