// Simulação de nome completo do usuário logado
const userFullName = "João Otávio";

// Função para pegar as iniciais (primeira letra do nome e do sobrenome)
function getInitials(name) {
  const names = name.split(" ");
  const initials = names[0].charAt(0).toUpperCase() + names[1].charAt(0).toUpperCase();
  return initials;
}

// Colocar as iniciais no círculo
document.getElementById("user-initials").textContent = getInitials(userFullName);
