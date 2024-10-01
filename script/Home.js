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
document.querySelectorAll('.star').forEach(star => {
  star.addEventListener('click', () => {
      // Remove a classe 'selected' de todas as estrelas
      document.querySelectorAll('.star').forEach(s => s.classList.remove('selected'));
      
      // Adiciona a classe 'selected' à estrela clicada
      star.classList.add('selected');
      
      // Aqui você poderia adicionar lógica para atualizar a barra de progresso
  });
});
