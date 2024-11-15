var Submenu = document.querySelector('.submenu');
var openSubmenu = document.querySelector('.open_submenu');


openSubmenu.addEventListener('click', function(e) {
  e.stopPropagation(); 
  Submenu.classList.toggle('show');
});


document.addEventListener('click', function(e) {
  if (Submenu.classList.contains('show') &&
      !Submenu.contains(e.target) &&
      !openSubmenu.contains(e.target)) {
    Submenu.classList.remove('show');
  }
});