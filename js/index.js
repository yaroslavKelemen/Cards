import * as cards from './cards.js';

const cardsText = document.querySelector('.text');
const firstScreen = document.querySelector('.screen-1');
const secScreen = document.querySelector('.screen-2');
const images = document.querySelectorAll('.grid-row .grid__block');

images[0].addEventListener('click', () => {
  modal.open(cards.spaceX);
});

images[1].addEventListener('click', () => {
  modal.open(cards.tesla);
});

images[2].addEventListener('click', () => {
  modal.open(cards.unsplash);
});

images[3].addEventListener('click', () => {
  modal.open(cards.paris);
});

images[4].addEventListener('click', () => {
  modal.open(cards.instagram);
});

images[5].addEventListener('click', () => {
  modal.open(cards.venom);
});

gsap.to(cardsText, {
  duration: 2, 
  opacity: 1,
  delay: 1
});

cardsText.addEventListener('click', () => {
  gsap.to(cardsText, {
    duration: 2, 
    opacity: 0,
    ease: 'elastic',
  });

  firstScreen.style.display = 'none';

  gsap.to(secScreen, {
    duration: 4,
    opacity: 1,
    ease: 'expo'
  });

  
  anime({
    targets: '.grid-row .grid__block',
    opacity: 1,
    scale: [
      {value: 0.1, easing: 'easeInOutQuad', duration: 500},
      {value: 1, easing: 'easeOutSine', duration: 1000}
    ],
    delay: anime.stagger(750, {grid: [5, 3], from: 'center'})
  });

  images.forEach((image) => {
    image.style.pointerEvents = 'auto';
  });
});

const modal = $.modal();
// modal.open();

document.querySelector('.modal-close').addEventListener('click', () => {
  modal.close();
});