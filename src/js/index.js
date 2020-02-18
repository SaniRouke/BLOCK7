import '../scss/style.scss';
import Swiper from './swiper.min.js';
console.log('Works!');

var mySwiper = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 100
});
mySwiper.init();
function showPopupMenu() {
  let popupMenu = document.querySelector('.wrapper-header-nav-popup');
  let pageWrapper = document.querySelector('.page-wrapper');
  popupMenu.classList.toggle('wrapper-header-nav-popup--hidden');
  pageWrapper.classList.toggle('page-wrapper--hidden');
}

let burger = document.querySelector('.burger');
burger.addEventListener('click', showPopupMenu);
let cancel = document.querySelector('.cancel');
cancel.addEventListener('click', showPopupMenu);

// swiper
// var mySwiper = undefined;

// function initSwiper() {
// 	var screenWidth = window.outerWidth;
// 	if ((screenWidth < (768)) && (mySwiper === undefined)) {
		mySwiper = new Swiper('.swiper-container', {
			// init: false,
			slidesPerView: 'auto',
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		});
// 	} else if ((screenWidth > 350) && (mySwiper != undefined)) {
// 		mySwiper.destroy();
// 		mySwiper = undefined;
// 		console.log(mySwiper)
// 	}
// }
// initSwiper();

// expand
let slides = document.querySelectorAll('.swiper-slide');
let expand = document.querySelector('.expand');

function hiddenSlides(slides) {
	return function () {
		for (let i = 0; i < slides.length; i++) {
			if (i > 5) {
				slides[i].classList.toggle('display-flex');
				if (expand.innerHTML === 'Скрыть') {
					expand.innerHTML = 'Показать все';
					expand.backgroundImage = 'url(img/expand-up.svg)'
				} else {
					expand.innerHTML = 'Скрыть';
					expand.backgroundImage = 'url(img/expand-down.svg)'
				}
			}
		}
	}
}
expand.addEventListener('click', hiddenSlides(slides))