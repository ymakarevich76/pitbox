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


if (document.querySelector('.sub-menu-aside__link')) {

  const subAsideLinks = document.querySelectorAll('.sub-menu-aside__link');

  const sub1AsideLinks = document.querySelectorAll('.aside-sub-1__link');


  subAsideLinks.forEach((subLink, index) => {
    subLink.addEventListener('click', (evt) => {

      subAsideLinks.forEach((subLink) => {
        subLink.classList.remove('sub-menu-aside__link--active');
      });

      document.querySelector('.aside-sub-1__link').classList.remove('aside-sub-1__link--active');

      evt.currentTarget.classList.add('sub-menu-aside__link--active');
    })
  });





  sub1AsideLinks.forEach((sub1Link, index) => {
    sub1Link.addEventListener('click', (evt) => {

      const sub1LinkParent = evt.currentTarget.closest('.sub-menu-aside__item').firstElementChild;

      sub1AsideLinks.forEach((sub1Link) => {
        sub1LinkParent.classList.remove('sub-menu-aside__link--active');

        sub1Link.classList.remove('aside-sub-1__link--active');
      });

      evt.currentTarget.classList.add('aside-sub-1__link--active');
      sub1LinkParent.classList.add('sub-menu-aside__link--active');

    })
  });
}
