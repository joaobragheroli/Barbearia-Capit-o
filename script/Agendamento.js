let selectedBarberId = null;

function selectBarber(barberId) {
    selectedBarberId = barberId; // Armazena o ID do barbeiro na variável
    console.log("Barbeiro selecionado:", selectedBarberId); // Exibe o ID no console
}

// Função para salvar no localStorage e ir na proxima pagina
function saveBarberAndNavigate() {
    localStorage.setItem('selectedBarberId', selectedBarberId);
    window.location.href = '././Paginas_Agendamento/mostraServicos.html';
}



// Função para mostrar o modal
function showModal() {
    document.getElementById('loginModal').style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Verificar se o usuário está logado
function checkLoginStatus(barberId) {
    const user = firebase.auth().currentUser;

    if (!user) {
        showModal(); // Mostra o modal se não estiver logado
    } else {
        // Se estiver logado, chama as funções de seleção e navegação
        selectBarber(barberId);
        saveBarberAndNavigate();
    }
}

// Função que é chamada no clique do barbeiro
function handleBarberClick(barberId) {
    checkLoginStatus(barberId); // Passa o ID do barbeiro para verificação
}


function armazenarNome() {
    const nome = document.getElementById("user-name").innerText; // Pega o nome do elemento
    sessionStorage.setItem("userName", nome); // Armazena no sessionStorage
}