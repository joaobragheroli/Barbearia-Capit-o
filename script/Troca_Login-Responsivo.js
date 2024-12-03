function exibirInfoUsuario(user) {
  const uid = user.uid;
  const db = firebase.firestore();

  db.collection("Usuarios").doc(uid).get()
      .then((doc) => {
          if (doc.exists) {
              const userData = doc.data();
              const nome = userData.nome || "Nome não disponível";
              document.getElementById("user-name-Responsivo").innerText = nome;

              console.log(nome);
              localStorage.setItem("Nome_Usuario", nome);
          } else {
              document.getElementById("user-name-Responsivo").innerText = "Usuário não encontrado";
          }
      })
      .catch((error) => {
          console.error("Erro ao buscar o nome do usuário:", error);
          document.getElementById("user-name-Responsivo").innerText = "Erro ao buscar o nome";
      });
}

// Adiciona o evento de clique para redirecionar para R.agendamentos.html com o nome do usuário
document.getElementById("agendamentos-link-Responsivo").addEventListener("click", function() {
    const nomeUsuario = localStorage.getItem("Nome_Usuario");
    
    if (nomeUsuario) {
        window.location.href = `./Paginas_Modal/R.agendamentos.html?nomeUsuario=${encodeURIComponent(nomeUsuario)}`;
    } else {
        console.log("Nome de usuário não encontrado.");
    }
});


function toggleDropdown() {
  const dropdownContent = document.getElementById("dropdown-content-Responsivo");
  const avatar = document.getElementById("user-avatar-Responsivo");

  dropdownContent.style.display = dropdownContent.style.display === "none" ? "block" : "none";

  if (avatar) {
      avatar.classList.toggle('active');
  }
}

function logout() {
  firebase.auth().signOut().then(() => {
      alert("Você saiu da sua conta.");
      document.getElementById("user-avatar-Responsivo").style.display = "none"; // Esconde o avatar ao deslogar
      document.getElementById("user-name-Responsivo").innerText = "Usuário não logado";
  }).catch((error) => {
      console.error("Erro ao fazer logout:", error);
  });
}

// Verifica o estado de autenticação ao carregar a página
window.onload = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        document.getElementById("user-initials-Responsivo").innerText = user.email.charAt(0).toUpperCase();
        document.querySelector(".button-login-Responsivo").style.display = "none";

        setTimeout(() => {
            document.getElementById("user-avatar-Responsivo").style.display = "block"; 
        }, 500); // 500 milissegundos de atraso (0,5 segundos)

          exibirInfoUsuario(user);
      } else {
          document.getElementById("user-avatar-Responsivo").style.display = "none"; // Esconde o avatar ao deslogar
          document.getElementById("user-name-Responsivo").innerText = "Usuário não logado";
      }
  });
};
