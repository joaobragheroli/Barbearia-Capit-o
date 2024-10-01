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
