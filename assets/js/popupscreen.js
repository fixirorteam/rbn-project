const popup = document.querySelector('.popup');
const dismiss = document.querySelector('.popup__dismiss')
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

let currentSlide = 0;

setTimeout(function(){
    popup.classList.add("popup--show")
}, 3000);

dismiss.addEventListener("click", function(){
    console.log("Dismiss Success");
    popup.classList.remove("popup--show")
    popup.classList.add("popup--close")
})