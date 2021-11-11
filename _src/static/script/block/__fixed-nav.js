if (document.querySelector('.header__wrap-bottom')) {
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
