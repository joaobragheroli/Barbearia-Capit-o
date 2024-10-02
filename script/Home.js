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
// Função para atualizar as iniciais no header
function updateUserInitials(firstName, lastName) {
  const initials = (firstName.charAt(0) + lastName.charAt(0)).toUpperCase();
  document.getElementById('initials').textContent = initials;
  document.getElementById('user-initials').style.display = 'block';
}

// Avaliação

const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating-value');

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        // Limpa a seleção anterior
        stars.forEach(s => s.classList.remove('selected'));
        
        // Adiciona a classe 'selected' até a estrela clicada
        for (let i = 0; i <= index; i++) {
            stars[i].classList.add('selected');
        }

        // Atualiza o valor de avaliação
        ratingValue.textContent = index + 1; // Atualiza o valor com base no índice
    });
});


