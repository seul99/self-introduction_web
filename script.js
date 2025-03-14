// 슬라이드 이동시 fade-in 효과
document.addEventListener("DOMContentLoaded", function () {
   const fadeElements = document.querySelectorAll(".fade-in");

   const observer = new IntersectionObserver((entries) => {
       entries.forEach((entry) => {
           if (entry.isIntersecting) {
               entry.target.classList.add("show");
           } else{
               entry.target.classList.remove("show");
           }
       });
   }, { threshold: 0.2 });

   fadeElements.forEach((el) => observer.observe(el));


   // food.html 화면 슬라이드 넘기기
var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currntIdx = 0,
    slideCount = slide.length,
    prevBtn = document.querySelector('.prev'),
    slideWidth = 300,
    slideMargin = 30,
    nextBtn = document.querySelector('.next');

// css 에 margin width 설정
slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin +'px';

function moveSlide(num){
    slides.style.left = -num * 330 +'px';
    currntIdx = num;
}
nextBtn.addEventListener('click', function(){
    if(currntIdx < slideCount - 3){
        moveSlide(currntIdx + 1);  
    } else {
        moveSlide(0);  
    }
});

prevBtn.addEventListener('click', function(){
    if(currntIdx > 0){
        moveSlide(currntIdx - 1);  
    } else {
        alert("처음입니다!");
    }
});


});


