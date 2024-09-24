// Faz mudar o Carrosel Card "Serviço"
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 3,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsavel breakPoint
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        620: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        }
    }

});