Burger-menu

const tabletSize = 1000;
const mobileSize = 640;
let screenType;
const changeSlider = new Event('changeSlider');

// burger menu
const burgerMenu = document.querySelector('.burger_icon');
const menuBody = document.querySelector('.menu_body');
const headerLogo = document.querySelector('header').querySelector('.logo');

// open/close
burgerMenu.addEventListener('click', function (e) {
  burgerMenu.classList.toggle('_active');
  document.body.classList.toggle('_lock');
  menuBody.classList.toggle('_active');
  headerLogo.classList.toggle('burger_logo');
});
// close
menuBody.addEventListener('click', (e) => {
  if (menuBody.classList.contains('_active') && e.target === menuBody) {
    burgerMenu.classList.toggle('_active');
    document.body.classList.toggle('_lock');
    menuBody.classList.toggle('_active');
    headerLogo.classList.toggle('burger_logo');
  }
});
