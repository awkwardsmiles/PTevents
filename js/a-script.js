// burger menu//
let burger = document.querySelector('.burger-menu');
let nav = document.querySelector('.main_nav');
burger.addEventListener('click', function(){
    burger.classList.toggle('active')
    nav.classList.toggle('active')
})