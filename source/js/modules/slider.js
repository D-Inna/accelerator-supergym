const initSwiper = () => {
  const swiperCoachе = new Swiper('.coachеs__slider', { // eslint-disable-line
    direction: 'horizontal',
    loop: true,
    initialSlide: 0,

    navigation: {
      nextEl: '.coachеs__button--next',
      prevEl: '.coachеs__button--prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
      pageUpDown: true,
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
        // spaceBetween: 40,
      },
      // when window width is >= 1300px
      1280: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        // spaceBetween: 40,
      },
    },
  });
};

const initReviewsSwiper = () => {
  const swiperReviews = new Swiper('.reviews__swiper', { // eslint-disable-line
    direction: 'horizontal',
    loop: false,
    initialSlide: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,

    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
      pageUpDown: true,
    },
  });
};
export {initSwiper, initReviewsSwiper};
