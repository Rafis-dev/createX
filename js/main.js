//МОБИЛЬНОЕ МЕНЮ + ФИКСИРУЕМ BODY
const iconMenu = document.querySelector('.icon-menu');
if (iconMenu) {
  const menuBody = document.querySelector('.header__menu');
  const body = document.body;
  iconMenu.addEventListener("click", function (e) {
    this.classList.toggle('icon-menu_active');
    menuBody.classList.toggle('header__menu_active');
    body.classList.toggle('_lock');
    e.preventDefault
  });
};
//ПОЯВЛЕНИЕ КНОПКИ КОТОРАЯ СКРОЛЛИТ НАВЕРХ СТРАНИЦЫ
window.addEventListener('scroll', () => {
  const toTop = document.querySelector('.footnote-btn__button');
  let y = window.scrollY;
  let heroHight = document.querySelector(".main-slider, .main-section").offsetHeight;

  if (y > heroHight) {
    toTop.classList.add('footnote-btn__button_active');
  } else {
    toTop.classList.remove('footnote-btn__button_active');
  }
});

// СЛАЙДЕР ПЕРВОГО ЭКРАНА
const swiper = new Swiper('.main-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.main-swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.main-swiper-button-next',
    prevEl: '.main-swiper-button-prev',
  },

});

// СЛАДЙЕР СЕКЦИИ PROJECTS
const projectsSwiper = new Swiper('.project-swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  centeredSlidesBounds: true,
  breakpoints: {

    640: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    1020: {
      slidesPerView: 3,
    }
  },


  // Navigation arrows
  navigation: {
    nextEl: '.project-swiper-button-next',
    prevEl: '.project-swiper-button-prev',
  },

  // And if we need scrollbar
});

//СЛАЙДЕР ОТЗЫВОВ
const reviewsSwiper = new Swiper('.reviews-swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.review-next',
    prevEl: '.review-prev',
  },

});


// АККОРДЕОН
document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');
  const accordion = document.querySelector('.accordion');
  const content1 = accordion.querySelector('.accordion__content');



  if (accordion.classList.contains('open')) {
    content1.style.maxHeight = content1.scrollHeight + 'px';
  } else {
    content1.style.maxHeight = null;
  }

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.accordion__control');
      const content = self.querySelector('.accordion__content');




      self.classList.toggle('open');



      // Ниже код для скрин-ридеров
      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
  });
});


// СЛАЙДЕР НА СТРАНИЦЕ КОТТЕДЖА
const cottageSwiper = new Swiper(".cottage-swiper", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {

    // when window width is >= 480px
    480: {
      slidesPerView: 6
    },
  }
});
const cottageSwiper2 = new Swiper(".cottage-swiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".cottage-swiper2-next",
    prevEl: ".cottage-swiper2-prev",
  },
  thumbs: {
    swiper: cottageSwiper,
  },
});

// СЛАЙДЕР НА СТРАНИЦЕ ABOUT US
const historySwiper = new Swiper(".history-swiper", {
  direction: 'vertical',
  spaceBetween: 20,
  slidesPerView: 9,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {

  }
});
const historySwiper2 = new Swiper(".history-swiper2", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".project-swiper-button-next",
    prevEl: ".project-swiper-button-prev",
  },
  thumbs: {
    swiper: historySwiper,
  },
});


//ТАБЫ
// Нашли все заголовки табов по data атрибуту
const tabHeaders = document.querySelectorAll('[data-tab]');
// Нашли все контент боксы
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabHeaders.forEach(function (item) {
  item.addEventListener('click', function () {
    // Добавляем и убираем active у заголовков табов
    document.querySelectorAll('.tabs-list__item').forEach((block) => block.classList.remove('active'));
    this.classList.add('active');
    // 1. Скрыть все content box
    contentBoxes.forEach(function (item) {
      item.classList.remove('active');
    });

    // 2. Выбрать нужный content box и показать его
    const contentBox = document.querySelector('#' + this.dataset.tab);
    contentBox.classList.add('active');

  })
})

// Пагинация в табах
const pagItem = document.querySelectorAll('.pagination-list__item');
pagItem.forEach(function (page) {
  page.addEventListener('click', function () {
    pagItem.forEach((page) => page.classList.remove('active'));
    this.classList.add('active');
  })
})

// Модальные окна на странице positions
const modalController = ({ modal, btnOpen, btnClose, time = 300 }) => {
  const buttonElems = document.querySelectorAll(btnOpen);
  const modalElem = document.querySelector(modal);
  const body = document.body;

  modalElem.style.cssText = `
  display: flex;
  visibility: hidden;
  opacity: 0;
  transition: opacity ${time}ms ease-in-out;
  `;
  // Закрытие модального окна при клике на крестик и мимо окна или на клавишу escape
  const closeModal = event => {
    const target = event.target;
    if (
      target === modalElem ||
      (btnClose && target.closest(btnClose)) ||
      event.code === 'Escape') {
      modalElem.style.opacity = 0;
      setTimeout(() => {
        modalElem.style.visibility = 'hidden';
      }, time);
      window.removeEventListener('keydown', closeModal);
      body.classList.remove('_lock');
    }
  }

  // Функция открытия модального окна
  const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
    window.addEventListener('keydown', closeModal);
    body.classList.add('_lock');
  }
  //Открываем модальное окна при клике на кнопку
  buttonElems.forEach(btn => {
    btn.addEventListener('click', openModal)
  });
  //Закрываем модальное окно
  modalElem.addEventListener('click', closeModal);
}

// В параметры передаем модальное окно, кнопку открытия и закрытия модальных окон, и время закрытия/открытия модальных окон
modalController({
  modal: '.modal1',
  btnOpen: '.modal-btn',
  btnClose: '.modal__close',
  time: 300,
});

modalController({
  modal: '.modal2',
  btnOpen: '.modal-btn2',
  btnClose: '.modal__close',
  time: 300,
});