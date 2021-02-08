$(function(){
  $('.single-item').slick({   //появился слайдер
    arrows: false,  //убрали кнопки назад врепед
    dots: true,  //кнопочки пагинации внизу
    slidesToShow: 1,
    slidesToScroll: 1,
    // infinite: true,
    //speed: 300,
    //slidesToShow: 1,
   // adaptiveHeight: true
   // autoplay: true, //каждие 3 с слайд прокручивае автоматически
   // fade:true, //не прокручивается а картинка плавно появляется сменяя другую
  });
});

const counterButtonManes = document.querySelectorAll('.manes')
const counterInput = document.querySelectorAll('.counter-input')
const counterButtonPlas = document.querySelectorAll('.plas')
const colorLabel = document.querySelectorAll('.color-label')

colorLabel.forEach(btn => btn.addEventListener('click', () => {
    btn.classList.toggle('active')
})
)

counterButtonManes.forEach(btn => btn.addEventListener('click', () => {
  counterInput.forEach(item => {
    const namber = item.value
    item.value = namber - 1
    if (item.value <= 0) {
    item.value = 1
  }
  })
})
);

counterButtonPlas.forEach(btn => btn.addEventListener('click', () => {
  counterInput.forEach(item =>{
    const namber = item.value
    item.value = +namber + 1
  })
})
)


