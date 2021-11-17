if (document.querySelector('.accordion-btn')) {
  const accordionBtns = document.querySelectorAll('.accordion-btn');
  accordionBtns.forEach((btn, index) => {
    btn.addEventListener('click', (evt) => {
      evt.currentTarget.classList.toggle('accordion-btn--active');
    })
  });
}
