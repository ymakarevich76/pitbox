
if (document.getElementById('date')) {
  const date = document.getElementById('date');

  date.onblur = function () {
    if (!input.value.includes('@')) { // не email
      input.classList.add('invalid');
      error.innerHTML = 'Пожалуйста, введите правильный email.'
    }
  };

  date.onfocus = function () {
    if (this.classList.contains('invalid')) {
      this.classList.remove('invalid');
      error.innerHTML = "";
    }
  };
}

