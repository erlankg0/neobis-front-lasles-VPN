const swiper = new Swiper('.mySwiper', {
    // Параметры по умолчанию
    slidesPerView: 3,
    loop: false,
    keyboard: true,

    pagination: {
        el: '.reviews__pagination'
    },

    navigation: {
        nextEl: '.reviews__next',
        prevEl: '.reviews__prev',
    },

});
