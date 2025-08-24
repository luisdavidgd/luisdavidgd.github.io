// slider.js
console.log('slider loaded');

new Swiper('.mySwiper', {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
  }
});