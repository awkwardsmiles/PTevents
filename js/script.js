
//image carosel//
const slides = document.querySelectorAll('.slide'); 
const left = document.getElementById('left');
const right = document.getElementById('right');

let activeslide = 0;

right.addEventListener('click', ()=>{
    activeslide++

    if(activeslide > slides.length - 1){
        activeslide = 0
    }
    setactiveslide()
})

left.addEventListener('click', ()=>{
    activeslide--

    if(activeslide < 0){
        activeslide = slides.length - 1;
    }

    setactiveslide()
})

function setactiveslide() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    slides[activeslide].classList.add('active');
}
// burger menu//
let burger = document.querySelector('.burger-menu');
let nav = document.querySelector('.main_nav');
burger.addEventListener('click', function(){
    burger.classList.toggle('active')
    nav.classList.toggle('active')
})