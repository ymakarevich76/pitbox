if (document.querySelector('.header__mob-icon')) {
  const btnMob = document.querySelector('.header__mob-icon');
  const headerInfo = document.querySelector('.header__info');
  btnMob.addEventListener('click', (evt) => {
    headerInfo.classList.toggle('header__info--active');
    evt.currentTarget.classList.toggle('header__mob-icon--active');
  })
}
