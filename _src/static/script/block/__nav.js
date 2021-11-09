const hamburger = document.querySelector('.header__nav-btn');
const nav = document.querySelector('.header__bottom');
const btnClose = document.querySelector('.header__icon-close');
const body = document.querySelector('body');

const openMenu = () => {
  body.classList.add('fixed');
  nav.classList.add('header__bottom--active');
};

const closeMenu = () => {
  body.classList.remove('fixed');
  nav.classList.remove('header__bottom--active');
}

hamburger.addEventListener('click', () => {
  openMenu();
});

btnClose.addEventListener('click', () => {
  closeMenu();
});

nav.addEventListener('click', (evt) => {
  if (evt.target === nav) {
    closeMenu();
  }
});
