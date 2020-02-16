import '../scss/style.scss';

console.log('Works!');

function showPopupMenu() {
  let popupMenu = document.querySelector('.wrapper-header-nav-popup');
  popupMenu.classList.toggle('wrapper-header-nav-popup--hidden');
}

let burger = document.querySelector('.burger');
burger.addEventListener('click', showPopupMenu);
let cancel = document.querySelector('.cancel');
cancel.addEventListener('click', showPopupMenu);
