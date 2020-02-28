import '../scss/style.scss';
import Swiper from './swiper';

////////////////////////////////// swiper
var mySwiper = undefined;

if (window.outerWidth < 768 && mySwiper === undefined) {
  mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    // loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

////////////////////////////////// popupMenu
let popups = {
  // 'button': 'popup-wrapper => toggle to popup-wrapper--visible',
  'burger': 'popup-menu',
  'popup-menu__cancel': 'popup-menu',

  'chat': 'popup-feedback',
  'popup-feedback__cancel': 'popup-feedback',

  'call': 'popup-call',
  'popup-call__cancel': 'popup-call',
};
let isOpen = false;

let showPopup = function (popup) {
  let pageWrapper = document.querySelector('.page-wrapper');
  let popupNode = document.querySelector(`.${popup}`);

  let doVisible = function () {
    if (isOpen) {
      closeAllPopups();
    }
    isOpen = true;
    pageWrapper.classList.add('page-wrapper--hidden');

    popupNode.classList.add(`${popup}--visible`);
    document.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        doVisible();
        showPage(popup);
      }
    });
  };

  return doVisible;
}
let closeAllPopups = function () {
  let popupMenu = document.querySelector('.popup-menu');
  let popupFeedback = document.querySelector('.popup-feedback');
  let popupCall = document.querySelector('.popup-call');
  popupMenu.classList.remove('popup-menu--visible');
  popupFeedback.classList.remove('popup-feedback--visible');
  popupCall.classList.remove('popup-call--visible');
  isOpen = false;
}
let showPage = function () {
  let pageWrapper = document.querySelector('.page-wrapper');
  return () => {
    pageWrapper.classList.remove('page-wrapper--hidden');
    closeAllPopups();
  }
}

let addPopupEvents = function (obj) {
  for (let i in obj) {
    let btns = document.querySelectorAll(`.${i}`);
    if (i.indexOf('cancel') != -1) {
      let cancel = document.querySelector(`.${i}`)
      cancel.addEventListener('click', showPage());
    } else {
      for (let k = 0; k < btns.length; k++) {
        btns[k].addEventListener('click', showPopup(obj[i]));
      }
    }
  }
}
addPopupEvents(popups);

////////////////////////////////// content
function readMore() {
  let contentSndParagraph = document.querySelector('.content__snd-paragraph');
  let contentSpan = document.querySelector('.content__span');

  return function () {
    contentExpandBtn.classList.toggle('content__expand-btn--hidden');
    contentSndParagraph.classList.toggle('content--hidden');
    contentSpan.classList.toggle('content--hidden');
    if (contentExpandBtn.innerHTML === 'Скрыть') {
      contentExpandBtn.innerHTML = 'Читать дальше';
    } else {
      contentExpandBtn.innerHTML = 'Скрыть';
    }
  }
}
let contentExpandBtn = document.querySelector('.content__expand-btn');
contentExpandBtn.addEventListener('click', readMore())

////////////////////////////////// brands
let buttonsShowMore = {
  'brands__expand-btn': 'brands__item',
  'devises__expand-btn': 'devises__item',
}

function showSlides(button, itemClass) {
  let items = document.querySelectorAll(`.${itemClass}`);
  let btn = document.querySelector(`.${button}`);
  let btnClassName = btn.className;
  return function () {
    console.log(btn.className)
    for (let i = 0; i < items.length; i++) {
      items[i].classList.toggle(`${itemClass}--visible--block`);

    }
    if (btn.innerHTML === 'Скрыть') {
      btn.innerHTML = 'Показать все';
      btn.classList.remove(`${btnClassName}--opened`);
    } else {
      btn.innerHTML = 'Скрыть';
      btn.classList.add(`${btnClassName}--opened`);
    }
  }
}
let addShowSlidesEvents = function (sliders) {
  for (let i in sliders) {
    let btn = document.querySelector(`.${i}`);
    btn.addEventListener('click', showSlides(i, sliders[i]));
  }
}
addShowSlidesEvents(buttonsShowMore);
// {
//   let swiperContentNav,
//     swiperBrandList,
//     swiperTypeList,
//     swiperPriceList;
// ​
//   let swiperSettings = {
//     slidesPerView: 'auto',
//     slidesOffsetBefore: 16,
//     slidesOffsetAfter: 16,
//     spaceBetween: 16,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     breakpoints: {
//       // when window width is >= MOBILE_PLUS_WIDTH
//       360: {
//         slidesOffsetBefore: 24,
//         slidesOffsetAfter: 24,
//         spaceBetween: 24,
//       },
//     }
//   }
// ​
//   let swiperSettingsNav = {
//     slidesPerView: 'auto',
//     slidesOffsetBefore: 16,
//     slidesOffsetAfter: 16,
//     spaceBetween: 4,
//     breakpoints: {
//       // when window width is >= MOBILE_PLUS_WIDTH
//       360: {
//         slidesOffsetBefore: 24,
//         slidesOffsetAfter: 24,
//         spaceBetween: 8,
//       },
//     }
//   }
// ​
//   if (window.innerWidth < TABLET_WIDTH) {
//     swiperBrandList = new Swiper('.brand-list', swiperSettings)
//     swiperTypeList = new Swiper('.type-list', swiperSettings)
//     swiperPriceList = new Swiper('.price-list', swiperSettings)
//   }
// ​
//   if (window.innerWidth < DESKTOP_WIDTH) {
//     swiperContentNav = new Swiper('.content-nav', swiperSettingsNav);
//   }
// ​
//   const swiperToggle = function (evt) {
//     if (window.innerWidth >= TABLET_WIDTH) {
//       if (swiperBrandList) swiperBrandList.destroy();
//       if (swiperTypeList) swiperTypeList.destroy();
//       if (swiperPriceList) swiperPriceList.destroy();
//     } else {
//       swiperBrandList = new Swiper('.brand-list', swiperSettings)
//       swiperTypeList = new Swiper('.type-list', swiperSettings)
//       swiperPriceList = new Swiper('.price-list', swiperSettings)
//     }
// ​
//     if (window.innerWidth >= DESKTOP_WIDTH) {
//       if (swiperContentNav) swiperContentNav.destroy();
//     } else {
//       swiperContentNav = new Swiper('.content-nav', swiperSettingsNav);
//     }
//   };
// ​
//   window.addEventListener('resize', debounce(swiperToggle,
//     200, false), false);
// }
