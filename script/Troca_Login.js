function exibirInfoUsuario(user) {
  const uid = user.uid;
  const db = firebase.firestore();

  db.collection("Usuarios").doc(uid).get()
      .then((doc) => {
          if (doc.exists) {
              const userData = doc.data();
              const nome = userData.nome || "Nome não disponível";
              document.getElementById("user-name").innerText = nome;
          } else {
              document.getElementById("user-name").innerText = "Usuário não encontrado";
          }
      })
      .catch((error) => {
          console.error("Erro ao buscar o nome do usuário:", error);
          document.getElementById("user-name").innerText = "Erro ao buscar o nome";
      });
}

function toggleDropdown() {
  const dropdownContent = document.getElementById("dropdown-content");
  const avatar = document.getElementById("user-avatar");

  dropdownContent.style.display = dropdownContent.style.display === "none" ? "block" : "none";

  if (avatar) {
      avatar.classList.toggle('active');
  }
}

function logout() {
  firebase.auth().signOut().then(() => {
      alert("Você saiu da sua conta.");
      document.getElementById("user-avatar").style.display = "none"; // Esconde o avatar ao deslogar
      document.getElementById("user-name").innerText = "Usuário não logado";
  }).catch((error) => {
      console.error("Erro ao fazer logout:", error);
  });
}

// Verifica o estado de autenticação ao carregar a página
window.onload = () => {
  firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          document.getElementById("user-initials").innerText = user.email.charAt(0).toUpperCase();
          document.getElementById("user-avatar").style.display = "block"; // Exibe o avatar ao logar
          document.querySelector(".button-login").style.display = "none"; // Exibe o avatar ao logar
         
          exibirInfoUsuario(user);
      } else {
          document.getElementById("user-avatar").style.display = "none"; // Esconde o avatar ao deslogar
          document.getElementById("user-name").innerText = "Usuário não logado";
      }
  });
};
