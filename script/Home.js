
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



// Avaliação das Estrelas
const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating-value');
const averageRatingValue = document.getElementById('average-rating-value');

// Valores fictícios para simular a média das avaliações no início (substitua por dados reais)
let totalRatings = [4, 5, 3, 4, 5]; // Exemplo de avaliações
let totalSum = totalRatings.reduce((acc, rating) => acc + rating, 0);
let averageRating = totalSum / totalRatings.length;

// Função para mostrar a média das avaliações
function displayAverageRating(average) {
  averageRatingValue.textContent = average.toFixed(1); // Exibe a média com uma casa decimal
}

// Mostra a média inicial (com valores simulados)
displayAverageRating(averageRating);

// Evento de clique nas estrelas de avaliação
stars.forEach(star => {
  star.addEventListener('click', () => {
    // Remove a seleção anterior
    stars.forEach(s => s.classList.remove('selected'));

    // Adiciona a seleção atual
    star.classList.add('selected');
    star.previousElementSibling?.classList.add('selected');
    let sibling = star.nextElementSibling;
    while (sibling) {
      sibling.classList.add('selected');
      sibling = sibling.nextElementSibling;
    }

    // Atualiza o valor da avaliação
    const rating = parseInt(star.getAttribute('data-value'));
    ratingValue.textContent = rating;

    // Simula o envio da avaliação para o servidor e recalcula a média
    totalRatings.push(rating);
    totalSum = totalRatings.reduce((acc, rating) => acc + rating, 0);
    averageRating = totalSum / totalRatings.length;

    // Atualiza a média com a nova avaliação
    displayAverageRating(averageRating);
  });
});
