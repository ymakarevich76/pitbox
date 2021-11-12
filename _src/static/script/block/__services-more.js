if (document.querySelector('.services__more-btn')) {
  const btnMore = document.querySelector('.services__more-btn');
  const blockMore = document.querySelector('.services__list-more');

  btnMore.addEventListener('click', (evt) => {
    evt.target.classList.add('services__more-btn--active')
    blockMore.classList.add('services__list-more--active');
  })
}
