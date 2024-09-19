
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
