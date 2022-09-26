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


// Аккордеон
document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');
  const accordion = document.querySelector('.accordion');
  const content1 = accordion.querySelector('.accordion__content');

  if (accordion.classList.contains('open')) {
    content1.style.maxHeight = content1.scrollHeight + 'px';
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


// Слайдер на странице коттеджа
const cottageSwiper = new Swiper(".cottage-swiper", {
  spaceBetween: 10,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
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