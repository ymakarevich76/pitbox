const promoSlider = new Swiper('.intro-slider', {
  loop: true,
  effect: "fade",

  navigation: {
    nextEl: '.intro-slider__btn-next',
    prevEl: '.intro-slider__btn-prev',
  },

  slidesPerView: 1,

  // autoplay: {
  //   delay: 7000,
  //   speed: 500,
  // },
});
