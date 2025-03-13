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
});


