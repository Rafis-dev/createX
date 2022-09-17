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