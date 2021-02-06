'use strict';
/* global Swiper */
(() => {
  const swiper = new Swiper(`.trainers__swiper-container`, {
    slidesPerView: 4,
    spaceBetween: 40,
    slidesPerGroup: 40,
    speed: 1000,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    navigation: {
      nextEl: `.trainers__button-next`,
      prevEl: `.trainers__button-prev`,
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        speed: 500,
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,
      }
    }
  });
})();