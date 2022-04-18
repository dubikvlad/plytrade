var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    //   spaceBetween: 0,
    //   slidesPerGroup: 1,
    loop: true,
    //   loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


const scrollingImages = document.querySelectorAll('.processing__links__link');

isVisibleBlock (scrollingImages);

window.addEventListener('scroll', function() {
    isVisibleBlock (scrollingImages);
});

function isVisibleBlock (targets) {
// Все позиции элемента
targets.forEach( (target)=> {
    let targetPosition = {
    top: window.pageYOffset + target.getBoundingClientRect().top,
    bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    // Получаем позиции окна
    windowPosition = {
    top: window.pageYOffset,
    bottom: window.pageYOffset + document.documentElement.clientHeight
    };


    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom  // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    ) { 
    // Если элемент полностью видно, то запускаем следующий код
    // console.clear();
    // console.log('Вы видите элемент :)');
    showHideTextInScrollingImage(target);
    
    } else {
    // Если элемент не видно, то запускаем этот код
    // console.clear();
    };
})

};