const hamburger = document.querySelector('.header__nav-btn');
const nav = document.querySelector('.header__nav');
const btnClose = document.querySelector('.header__icon-close');
const body = document.querySelector('body');

const openMenu = () => {
  body.classList.add('fixed');
  nav.classList.add('header__nav--active');
};

const closeMenu = () => {
  body.classList.remove('fixed');
  nav.classList.remove('header__nav--active');
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


if (document.querySelector('.nav__link')) {
  const arrowsMenu = document.querySelectorAll('.nav__link');
  arrowsMenu.forEach((arrow, index) => {
    arrow.addEventListener('click', (evt) => {
      evt.currentTarget.classList.toggle('nav__link--active');
    })
  });
}
