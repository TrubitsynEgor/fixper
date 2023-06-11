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
    320: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
  },
});
const commentsSlider = new Swiper(".comments__slider", {
  speed: 400,
  spaceBetween: 30,
  slidesPerView: 2,

  navigation: {
    nextEl: ".comments__slider-next",
    prevEl: ".comments__slider-prev",
  },

  pagination: {
    el: ".comments__slider-pagination",
    type: "bullets",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 2,
    },
  },
});
