// код для слайдера в reviews

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
// добавленния класса active
document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
})

// скроллинг

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav__link'); // сприсок всех nav nav__link

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const tardetID = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(tardetID);
            targetSection.scrollIntoView({behavior: 'smooth'})
        })
    })
})