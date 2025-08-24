// clients.js
console.log('clients loaded');
// Carousel (Swiper)
const Carousel = new Swiper('.myClientsSwiper', {
  loop: false,
  slidesPerView: 6,
  spaceBetween: 30,
  autoplay: {
    reverseDirection: false,
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  on: {
    reachEnd() {
      Carousel.autoplay.stop();
      Carousel.params.autoplay.reverseDirection = true;
      Carousel.autoplay.start();
    },
    reachBeginning() {
      Carousel.autoplay.stop();
      Carousel.params.autoplay.reverseDirection = false;
      Carousel.autoplay.start();
    }
  },
  breakpoints: {
    992: { slidesPerView: 6 },
    768: { slidesPerView: 4 },
    576: { slidesPerView: 3 },
    0: { slidesPerView: 2 }
  }
});