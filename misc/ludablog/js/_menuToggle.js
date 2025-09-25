document.addEventListener("DOMContentLoaded", function () {
  var container = document.getElementById('site-navigationbwrap');
  var button = document.getElementById('menuToggle');
  var menu = container.getElementsByTagName('ul')[0];

  if (!container || !button || !menu) return;

  if (-1 === menu.className.indexOf('nav-menu'))
    menu.className += ' nav-menu';

  button.onclick = function () {
    if (container.classList.contains('toggled')) {
      container.classList.remove('toggled');
      button.classList.remove('open');
    } else {
      container.classList.add('toggled');
      button.classList.add('open');
    }
  };
});