// swiper
var mySwiper = undefined;

function initSwiper() {
	var screenWidth = window.outerWidth;
	if ((screenWidth < (768)) && (mySwiper === undefined)) {
		mySwiper = new Swiper('.swiper-container', {
			// init: false,
			slidesPerView: 'auto',
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		});
	} else if ((screenWidth > 350) && (mySwiper != undefined)) {
		mySwiper.destroy();
		mySwiper = undefined;
		console.log(mySwiper)
	}
}
initSwiper();

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