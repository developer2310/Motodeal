let hiddenList = document.querySelector('.header__menu');
let button = document.querySelector('.bar__nav');
hiddenList.style.top = '-150px';



button.addEventListener('click', function () {
    hiddenList.classList.toggle('shown')
})


var splide = new Splide('.splide');
splide.mount();
splide.mount();