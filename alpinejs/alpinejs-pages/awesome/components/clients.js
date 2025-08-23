// client.js
console.log('client loaded');

new Swiper('.myClientsSwiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 5 }
  }
});