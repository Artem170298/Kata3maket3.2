let readMore = document.querySelector(".read-more");
let icButtonRM = document.querySelector(".read-more__icon-img");
let textButtonRM = document.querySelector(".read-more__text-button");
let b_brends = document.querySelector(".block-brends");

readMore.addEventListener('click', function(evt){

    evt.preventDefault();
    let openIc = "image/expand.png";
    let clossIc = "image/expand-closs.png";

    if (textButtonRM.textContent === "Скрыть"){
        b_brends.classList.remove("block-brends--open")
        textButtonRM.textContent = "Показать все";
        icButtonRM.src = openIc;
    }else{
        b_brends.classList.add("block-brends--open");
        textButtonRM.textContent = "Скрыть";
        icButtonRM.src = clossIc;
    }
})

if(document.documentElement.clientWidth < 768){

    let block_brends = document.querySelector('.block-brends');
    block_brends.classList.add('swiper');
    block_brends.classList.remove('block-brends')

    let block_brends__list = document.querySelector('.block-brends__list');
    block_brends__list.classList.add('swiper-wrapper');
    block_brends__list.classList.remove('block-brends__list')

    let swiper_button_next = document.createElement('div');
    swiper_button_next.classList.add('swiper-button-next');

    let swiper_button_prev = document.createElement('div');
    swiper_button_prev.classList.add('swiper-button-prev');

    let swiper_pagination = document.createElement('div');
    swiper_pagination.classList.add('swiper-pagination');

   
    block_brends.appendChild(swiper_button_next);
    block_brends.appendChild(swiper_button_prev);
    block_brends.appendChild(swiper_pagination);


    let swiper = new Swiper(".swiper", {
        slidesPerView: 'auto',
        spaceBetween: 16,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dinamicBullets: true,
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            snapOnRelease: true,
            dragSize: 'auto',
            draggable: true 
        },

        mousewhell: true,
        keyboard: true,
    })
}
