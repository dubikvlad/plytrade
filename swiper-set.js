//swiper settings
var swiper = new Swiper(".gallery__slider", {
    slidesPerView: 3,
    spaceBetween: 90,
    slidesPerGroup: 3,
    loop: true,
  //   loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });