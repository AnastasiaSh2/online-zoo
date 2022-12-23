'user strict';

const tabletSize = 755;
const mobileSize = 450;
let screenType;
const changeSlider = new Event('changeSlider');

// burger menu
const burgerMenu = document.querySelector('.burger_icon');
const menuBody = document.querySelector('.menu_body');
const headerLogo = document.querySelector('header').querySelector('.logo');

// open/close burger menu
burgerMenu.addEventListener('click', function (e) {
  burgerMenu.classList.toggle('_active');
  document.body.classList.toggle('_lock');
  menuBody.classList.toggle('_active');
  headerLogo.classList.toggle('burger_logo');
});
// close opened burger menu
menuBody.addEventListener('click', (e) => {
  if (menuBody.classList.contains('_active') && e.target === menuBody) {
    burgerMenu.classList.toggle('_active');
    document.body.classList.toggle('_lock');
    menuBody.classList.toggle('_active');
    headerLogo.classList.toggle('burger_logo');
  }
});

// testimonials range
let range = document.querySelector('input[type="range"]');
function showTestimonials() {
  let screenSize = document.documentElement.clientWidth;
  let area = document.querySelector('.wrap_window').clientWidth;
  console.log(area);

  let step =
    screenSize > 1250 ? -area / 4 - 6 : screenSize > 755 ? -area / 3 - 8 : 0;

  document.querySelector('.stories').style.left = `${step * range.value}px`;
}

range.addEventListener('input', showTestimonials);
window.addEventListener('resize', showTestimonials);

// modal window for testimonials
// open/close modal by click
let isModalReady = true;
document.querySelectorAll('.wrap_story').forEach((item) => {
  item.addEventListener('click', (e) => {
    if (document.documentElement.clientWidth > tabletSize) return;

    if (
      e.currentTarget.classList.contains('modal') &&
      e.currentTarget != e.target &&
      !e.target.classList.contains('modal_close')
    )
      return;
    if (!isModalReady) return;

    isModalReady = false;
    item.classList.toggle('modal');
    document.body.classList.toggle('_lock');

    item.addEventListener('transitionend', function () {
      isModalReady = true;
    });
    e.preventDefault();
  });
});

// subscribe form
document.onsubmit = (e) => {
  e.preventDefault();
  alert(
    `Success subscribe!!!\nemail: ${
      document.querySelector('[type="email"]').value
    }`
  );
};
