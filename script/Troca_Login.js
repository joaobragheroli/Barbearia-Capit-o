function toggleDropdown() {
  const dropdownContent = document.getElementById("dropdown-content");
  const avatar = document.getElementById("user-avatar"); // Obtenha o avatar

  dropdownContent.style.display = dropdownContent.style.display === "none" ? "block" : "none";

  // Alterna a classe 'active' no avatar
  if (avatar) {
    avatar.classList.toggle('active');
  }
}

function logout() {
  firebase.auth().signOut().then(() => {
      // Logout bem-sucedido
      alert("Você saiu da sua conta.");
  }).catch((error) => {
      console.error("Erro ao fazer logout:", error);
  });
}

// Verifica o estado de autenticação ao carregar a página
window.onload = () => {
  firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          document.getElementById("user-initials").innerText = user.email.charAt(0).toUpperCase(); // Exibe a inicial do usuário
          document.getElementById("user-name").innerText = user.displayName || "Usuário"; // Exibe o nome do usuário, se disponível
          document.getElementById("user-avatar").style.display = "block"; // Mostra o avatar do usuário
      }
  });
};

// Ouvinte para mudanças no estado de autenticação
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
      // O usuário está logado
      const uid = user.uid; // Obtenha o ID do usuário logado
      
      // Acesse o Firestore
      const db = firebase.firestore();
      
      // Consulte o documento do usuário na coleção "Usuarios"
      db.collection("Usuarios").doc(uid).get()
          .then((doc) => {
              if (doc.exists) {
                  // O documento existe, pegue o nome
                  const userData = doc.data();
                  const nome = userData.nome || "Nome não disponível"; // Caso o nome não esteja definido
                  document.getElementById("user-name").innerText = nome;
              } else {
                  // Documento não encontrado
                  document.getElementById("user-name").innerText = "Usuário não encontrado";
              }
          })
          .catch((error) => {
              console.error("Erro ao buscar o nome do usuário:", error);
              document.getElementById("user-name").innerText = "Erro ao buscar o nome";
          });
  } else {
      // O usuário não está logado
      document.getElementById("user-name").innerText = "Usuário não logado";
  }
});








