// testemonial//
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const comments = document.querySelector('.comments');

let counter = 0;

nextBtn.addEventListener('click', () => {
    counter++;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    counter--;
    updateCarousel();
});

function updateCarousel() {
    const commentWidth = document.querySelector('.comment').offsetWidth;
    const numComments = document.querySelectorAll('.comment').length;
    
    if (counter >= numComments) {
        counter = 0; 
    } else if (counter < 0) {
        counter = numComments - 1; 
    }

    const offsetX = -counter * commentWidth;
    comments.style.transform = `translateX(${offsetX}px)`;
}
// burger menu//
let burger = document.querySelector('.burger-menu');
let nav = document.querySelector('.main_nav');
burger.addEventListener('click', function(){
    burger.classList.toggle('active')
    nav.classList.toggle('active')
})
