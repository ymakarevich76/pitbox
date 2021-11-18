if (document.querySelector('.nav-aside__link')) {
  const navAsideLinks = document.querySelectorAll('.nav-aside__link');

  navAsideLinks.forEach((nav, index) => {
    nav.addEventListener('click', (evt) => {

      navAsideLinks.forEach((nav) => {
        nav.classList.remove('nav-aside__link--active');
      });

      evt.currentTarget.classList.add('nav-aside__link--active');
    })
  });
}
