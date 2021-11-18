
if (document.getElementById('date')) {
  const date = document.getElementById('date');

  date.onblur = function () {
    date.type = 'text';
  };

  date.onfocus = function () {
    date.type = 'date';
  };
}


if (document.getElementById('time')) {
  const date = document.getElementById('time');

  date.onblur = function (evt) {
    date.type = 'text';
  };

  date.onfocus = function (evt) {
    date.type = 'time';
  };
}
