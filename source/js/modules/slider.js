const initSwiper = () => {
  const swiper = new Swiper('.coachеs__slider', { // eslint-disable-line
    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    maxBackfaceHiddenSlides: 0,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
      // when window width is >= 1200px
      1300: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        // spaceBetween: 40,
      },
    },
  });
};
export {initSwiper};
