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


// Faz chegar a frase no "Home-IMG" e outros elementos
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove("show");
        }
    });
});

// Seleciona todos os elementos com a classe 'hidden' e o elemento 'sectionIMG'
const hiddenElements = document.querySelectorAll('.hidden');


// Observa todos os elementos com a classe 'hidden'
hiddenElements.forEach((element) => myObserver.observe(element));

















