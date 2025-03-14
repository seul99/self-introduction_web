# Self Introduction Web Site
멋사 1주차 프로젝트로 제작한 자기소개 웹페이지 입니다. 🌟

<br>

## 🗒️ What's page
- Home: 메인 페이지 <br>
- About: 간단한 자기소개 <br>
- Favorite: 취미, 관심사 정리 <br>
- Contact: SNS 링크

<br>

## 🚀 Skill
<img src="https://img.shields.io/badge/html5-E34F26?style=flat-square&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white">

<br>

## ⚙️ 주요 기능
**Favorite** 화면에서 **Food, Travel** 부분 **이미지, 글씨** 클릭시 페이지 이동 <br>

**CSS** <br>
**scroll** 기능 추가
```
html{
   scroll-behavior: smooth;
}
/* 스크롤 다운 */
#container{
   width:100%;
   height:100vh; 
   overflow: scroll;
   scroll-behavior: smooth;
   scroll-snap-type: y mandatory;
   -ms-overflow-style: none;
   scrollbar-width: none;
   min-height: 100vh;
   overflow-y: auto;
}
/* 스크롤바 제거 */
#container::-webkit-scrollbar {
   display: none;
 }
```

<br>

**JavaScript** <br>
**main** 화면에서 **fade-in** 효과 <br>
```
// 슬라이드 이동 시 fade-in 효과
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
```
<br>

**Food Site** 에서 ⬅️ ➡️ 버튼 클릭할 경우 **이미지가 슬라이드 처럼 이동** <br>
```
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

// 첫 페이지 에서 ⬅️ 누르면 알림창 뜨게 하기
prevBtn.addEventListener('click', function(){
    if(currntIdx > 0){
        moveSlide(currntIdx - 1);  
    } else {
        alert("처음입니다!");
    }
});
```

## 🖥️ 그 기능 간단 정리
- [x] 상당 menu 글씨에 마우스 호버할 경우 반투명으로 변함
- [x] 각 메뉴 클릭시 해당 섹션으로 이동
- [x] 이미지에 마우스 호버할 경우 사이즈  커짐 ``` transform: scale(1.05); ```
