var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    freeMode: true,
    speed: 900,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        998: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        1210: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
}); 