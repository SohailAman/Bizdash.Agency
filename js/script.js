var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    freeMode: true,
    speed: 900,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});