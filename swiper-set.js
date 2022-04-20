//swiper settings
var swiper = new Swiper(".gallery__slider", {
    slidesPerView: 3,
    spaceBetween: 90,
    slidesPerGroup: 3,
    speed: 1000,
    effect: "slide",
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  //   loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });