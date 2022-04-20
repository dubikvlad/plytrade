const scrollingImages = document.querySelectorAll('.processing');



let first = new IsVisibleBlock('.processing', '.processing__links__link');

window.addEventListener('scroll', function() {
  let first = new IsVisibleBlock('.processing', '.processing__links__link');
  let second = new IsVisibleBlock('.processing__block', '.processing__preview__img');
});

function IsVisibleBlock (firstBlockSelector, secondarySelector) {

  const targets = document.querySelectorAll(firstBlockSelector, secondarySelector);
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
        showHideTextInScrollingBlock(target, secondarySelector);
        
        } else {
        // Если элемент не видно, то запускаем этот код
        // console.clear();
        };
    })

};

function showHideTextInScrollingBlock(imageBlock, secondarySelector) {
    const blockHeight = imageBlock.getBoundingClientRect().height;
    const textInScrollingImage = imageBlock.querySelectorAll(secondarySelector); //находим в блоке нужные блоки с текстом
    let textConter = ''; // сколько блоков нашло

  
    textInScrollingImage.forEach((element, i) => {
      textConter = i + 1;
    });
  
    let heightForOneText = blockHeight / textConter;
  
    for (let i = 0; i < textConter; i++) {
  
      let text = textInScrollingImage[i];

  
      const textPosition = {
        top: window.pageYOffset + imageBlock.getBoundingClientRect().top + heightForOneText * i + 360, // верх промежутка, где показыватеся текст
        bottom: window.pageYOffset + imageBlock.getBoundingClientRect().bottom + heightForOneText * (i + 1) + 360 // низ промежутка, где показывается текст
      } 
      
      const windowPosition = {
        top: window.pageYOffset,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };
      
      if (textPosition.bottom > windowPosition.top &&
          textPosition.top < windowPosition.bottom) {
          textInScrollingImage.forEach(element => {
            element.classList.remove('active');
          });
          text.classList.add('last-active');
          text.classList.add('active');
      } 

      else if (textPosition.bottom > windowPosition.top) {
        text.classList.remove('last-active');
      }
      
      else {
        text.classList.remove('active');
      }
    }
  }