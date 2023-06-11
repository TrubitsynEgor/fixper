import {
  Swiper,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper";
Swiper.use([EffectFade, Navigation, Pagination, Thumbs]);

const teamSlider = new Swiper(".team__slider", {
  speed: 400,
  spaceBetween: 30,
  slidesPerView: 3,

  navigation: {
    nextEl: ".team__slider-next",
    prevEl: ".team__slider-prev",
  },

  pagination: {
    el: ".team__slider-pagination",
    type: "bullets",
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    700: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    900: {
      slidesPerView: 3,
    },
  },
});
