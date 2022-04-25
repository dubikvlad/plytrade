//swiper settings
var swiper = new Swiper(".gallery__slider", {
    // slidesPerView: 3,
    // spaceBetween: 90,
    // slidesPerGroup: 3,
    speed: 1000,
    effect: "slide",
    
    autoplay: {
      delay: 3500,
      disableOnInteraction: true,
    },
    breakpoints: {
      
      320: {
        // speed: 200,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        loop: true
      },
      875: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 90,
        loop: true
      }
    },
  //   loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });