// all the classes and ids from html
const hamburger = document.querySelector('.lines');
const navLinks = document.querySelector('.nav__links');
const links = document.querySelector('nav__links li');
const items = document.getElementsByClassName('nav__links-item');
const desc = document.getElementsByClassName('container__description');
const btn = document.getElementsByClassName('container__btn');

// nav-bar function
function nav() {
  // add click event to the hamburger
  hamburger.addEventListener('click', () => {
    // toggle the classList 'is-active' for animation
    hamburger.classList.toggle('is-active');
    // toggle the classList 'open' for nav-bar to open and close
    navLinks.classList.toggle('open');
  });
  // select every item from the list
  for (let i = 0; i < items.length; i++) {
    // add click event after we click the item
    items[i].addEventListener('click', () => {
      // close the nav-bar page
      navLinks.classList.remove('open');
      // remove the animation from hamburger
      hamburger.classList.remove('is-active');
    });
  }
}
// readBtn function
function readBtn() {
  // Loop over buttons
  for (let i = 0; i < btn.length; i++) {
    // add click event on every btn
    btn[i].addEventListener('click', () => {

      desc[i].classList.toggle('hide');

      let bt = btn[i];
      // change the name of the btn
      if (bt.innerHTML === 'Read More') {

        bt.innerHTML = 'Read Less';

      } else {

        bt.innerHTML = 'Read More';

      }
      // animation using gsap
      TweenMax.from('.container__description', 0.5, {
        delay: 0.1,
        opacity: 0,
        ease: Expo.easeInOut
      });

      TweenMax.from('.container__btn', 0.3, {
        delay: 0.1,
        opacity: 0,
        y: 10,
        ease: Expo.easeInOut
      });
    });
  }
}

window.onload = function () {
  this.nav();
  this.readBtn();
}
// GSAP EFFECTS

TweenMax.to('.overlay .overlay__title', 2, {
  delay: 0.2,
  opacity: 0,
  y: -60,
  ease: Expo.easeInOut
});

TweenMax.to('.overlay .overlay__desc', 2, {
  delay: 0.2,
  opacity: 0,
  y: -60,
  ease: Expo.easeInOut
});

TweenMax.to('.overlay', 1, {
  delay: 0.7,
  top: '-200%',
  ease: Expo.easeInOut
});