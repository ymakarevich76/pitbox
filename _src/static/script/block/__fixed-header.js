const mediaQuery = window.matchMedia('(max-width: 992px)');

const handleTabletChange = (e) => {

  if (e.matches) {
    const header = document.querySelector('.header__wrap-top');
    const scrollChange = 200;
    let flagHeaderFixed = false;

    const showHeader = () => {
      header.classList.add("header__wrap-top--fixed");
      header.classList.add("animate__fadeInDown");
      flagHeaderFixed = true;
      setTimeout(() => {
        header.classList.remove("animate__fadeInDown");
      }, 800);
    };

    const hideHeader = () => {
      flagHeaderFixed = false;
      header.classList.remove("header__wrap-top--fixed");
    }

    window.addEventListener('scroll', () => {
      const scrollpos = window.scrollY;

      if (scrollpos >= scrollChange && !flagHeaderFixed) {
        showHeader();
      } else if (scrollpos < 112 && flagHeaderFixed) {
        hideHeader();
      }
    })
  } else {
    const header = document.querySelector('.header__wrap-bottom')
    const scrollChange = 200;
    let flagHeaderFixed = false;

    const showHeader = () => {
      header.classList.add("header__wrap-bottom--fixed");
      header.classList.add("animate__fadeInDown");
      flagHeaderFixed = true;
      setTimeout(() => {
        header.classList.remove("animate__fadeInDown");
      }, 800);
    };

    const hideHeader = () => {
      flagHeaderFixed = false;
      header.classList.remove("header__wrap-bottom--fixed");
    }

    window.addEventListener('scroll', () => {
      const scrollpos = window.scrollY;

      if (scrollpos >= scrollChange && !flagHeaderFixed) {
        showHeader();
      } else if (scrollpos < 112 && flagHeaderFixed) {
        hideHeader();
      }
    })
  }
}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)



