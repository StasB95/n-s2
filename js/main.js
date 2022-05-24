var navMain = document.querySelector('.nav-list');
var navToggle = document.querySelector('.nav__toggle');


navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('nav-closed')) {
    navMain.classList.remove('nav-closed');
    navMain.classList.add('nav-opened');
  } else {
    navMain.classList.add('nav-closed');
    navMain.classList.remove('nav-opened');
  }
});