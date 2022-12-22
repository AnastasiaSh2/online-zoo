const desktopSize = 1000;
const tabletSize = 640;
const mobileSize = 320;
let screenType = getCurScreenType();

// burger menu
const iconMenu = document.querySelector('.burger_icon');
const menuBody = document.querySelector('.menu_body');
const headerLogo = document.querySelector('header').querySelector('.logo');


iconMenu.addEventListener('click', function (e) {
  iconMenu.classList.toggle('_active');
  document.body.classList.toggle('_lock');
  menuBody.classList.toggle('_active');
  headerLogo.classList.toggle('burger_logo');
});

menuBody.addEventListener('click', (e) => {
  if (menuBody.classList.contains('_active')) {
    iconMenu.classList.toggle('_active');
    document.body.classList.toggle('_lock');
    menuBody.classList.toggle('_active');
    headerLogo.classList.toggle('burger_logo');
  }
});


document.querySelector('.subscribe').addEventListener('submit', (e) => {
  e.preventDefault();
  alert(
    `Success subscribe!!!\nemail: ${
      e.target.querySelector('[type="email"]').value
    }`
  );
});

let inputPrice = document.querySelector('.input_price');
let formAmount = document.querySelector('.chose_amount');
let priceList = formAmount.querySelectorAll('label');
let curPrice = formAmount.querySelector('.active_amount');


priceList.forEach((item) => {
  item.addEventListener('click', (e) => {
    let el = e.currentTarget;
    curPrice && curPrice.classList.remove('active_amount');
    let val = el.children[0].value;
    el.classList.add('active_amount');
    curPrice = el;
    inputPrice.value = val;
    e.preventDefault();
  });
});


function getCurScreenType() {
  let screenSize = document.documentElement.clientWidth;
  return screenSize > desktopSize
    ? 'desktop'
    : screenSize > tabletSize
    ? 'smallDesktop'
    : 'tablet';
}


window.addEventListener('resize', () => {
  let curScreenType = getCurScreenType();
  if (curScreenType == screenType) return;

  if (
    screenType == 'desktop' &&
    curScreenType == 'smallDesktop' &&
    +curPrice.children[0].value === 5000
  ) {
    curPrice.classList.remove('active_amount');
    curPrice = formAmount.querySelector('[data-amount="$100"]');
    curPrice.classList.add('active_amount');

    inputPrice.value = 100;
  } else if (
    screenType == 'smallDesktop' &&
    curScreenType == 'tablet' &&
    +curPrice.children[0].value === 2000
  ) {
    curPrice.classList.remove('active_amount');
    curPrice = formAmount.querySelector('[data-amount="$100"]');
    curPrice.classList.add('active_amount');
    inputPrice.value = 100;
  }
  screenType = curScreenType;
});


inputPrice.addEventListener('input', (e) => {
  e.target.value =
    e.target.value.length > 4 ? e.target.value.slice(0, 4) : e.target.value;
  priceList.forEach((el, i) => {
    if (el.children[0].value === e.target.value && el !== curPrice) {
      curPrice && curPrice.classList.remove('active_amount');
      el.classList.add('active_amount');
      curPrice = el;
    } else if (el == curPrice) {
      el.classList.remove('active_amount');
      curPrice = null;
    }
  });
});


document.querySelector('.amount').onsubmit = (e) => {
  e.preventDefault();
  const amount = document.querySelector('.input_price').value || 0;
  const period = e.target
    .querySelector('.period')
    .querySelector(':checked').value;
  alert(`Donate: ${amount}$ !!!\nPeriod: ${period} !`);
};
