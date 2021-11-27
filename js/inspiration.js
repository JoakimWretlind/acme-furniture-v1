let swiper = new Swiper(".swiper-container", {
// Default parameters
  loopFillGroupWithBlank: false,
  loop: true,  
  slidesPerView: 'auto',
  spaceBetween: 30,
  initialSlide: true,
  centeredSlides: 'true',
   
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    360: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1800: {
      slidesPerView: 4,
      spaceBetween: 40,
    }
  }
})
