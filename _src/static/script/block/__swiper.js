const promoSlider = new Swiper('.intro-slider', {
  loop: true,
  effect: "fade",

  navigation: {
    nextEl: '.intro-slider__btn-next',
    prevEl: '.intro-slider__btn-prev',
  },

  slidesPerView: 1,

  autoplay: {
    delay: 7000,
    speed: 500,
  },
});



if (document.querySelector('.stages-work__slider')) {

  const mediaQuery = window.matchMedia('(max-width: 768px)');
  let stagesWorkSlider;

  const handleTabletChange = (e) => {


    if (e.matches) {
      stagesWorkSlider = new Swiper('.stages-work__slider', {
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,

        pagination: {
          el: ".stages-work__pagination",
          clickable: true,
        },
        spaceBetween: 30,

        autoplay: {
          delay: 3000,
          speed: 500,
        },
      });
    } else {
      console.log(stagesWorkSlider);
      if (typeof (stagesWorkSlider) !== "undefined") {
        stagesWorkSlider.destroy();
      }
    }
  };

  mediaQuery.addListener(handleTabletChange);
  handleTabletChange(mediaQuery);
};

const testimonialsSlider = new Swiper('.testimonials__slider', {
  loop: true,
  // effect: "fade",

  pagination: {
    el: ".testimonials__pagination",
    clickable: true,
  },

  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

  autoplay: {
    delay: 2500,
    speed: 500,
  },
});
