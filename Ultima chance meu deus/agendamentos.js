document.addEventListener("DOMContentLoaded", function () {
    // Configuração do Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyCviZ-ql0st4L0Ii3BTIg1xgin5IGJeBt0",
        authDomain: "capitaobarbeiro-5b7be.firebaseapp.com",
        projectId: "capitaobarbeiro-5b7be",
        storageBucket: "capitaobarbeiro-5b7be.appspot.com",
        messagingSenderId: "1013857162216",
        appId: "1:1013857162216:web:d3d74fa8be916691174a5d",
        measurementId: "G-DMR6NG64B3"
    };

    // Inicializa o Firebase
    const app = firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    // Função para buscar os agendamentos no Firestore
    async function fetchAgendamentos() {
        const agendamentos = [];
        try {
            const snapshot = await db.collection("Agendamento").get();
            snapshot.forEach((doc) => {
                const data = doc.data();
                const timestamp = data.data; // O campo "data" é do tipo Timestamp
                const date = timestamp.toDate();
                const formattedDate = date.toISOString().split('T')[0]; // Formata para "YYYY-MM-DD"

                // Exibe no console os dados
                console.log(`Agendamento: ${data.titulo}, Data: ${formattedDate}`);

                agendamentos.push({
                    data: formattedDate, // Exemplo: "2024-11-28"
                    hora: data.hora, // Exemplo: "08:00"
                    servicos: data.servicos || ['Nenhum serviço informado'], // Se não houver serviços, exibe um valor padrão
                    status: data.status || 'Não informado', // Se status não estiver definido, exibe 'Não informado'
                    nomeUsuario: data.Nome_Usuario || 'Não informado', // Nome do usuário, caso esteja disponível
                    telefoneUsuario: data.Telefone_Usuario || 'Não informado', // Telefone do usuário, caso esteja disponível
                    barbeiro: data.barbeiro || 'Não informado', // Nome do barbeiro, caso esteja disponível
                    checkin: data.checkin || false // Status do check-in, caso esteja disponível
                });
            });
        } catch (error) {
            console.error("Erro ao buscar agendamentos:", error);
        }
        return agendamentos;
    }

    // Função para adicionar os agendamentos ao calendário
function renderizarAgendamentos() {
    fetchAgendamentos().then(agendamentos => {
        const cells = document.querySelectorAll(".calendar td"); // Todas as células do calendário
    
        agendamentos.forEach((agendamento) => {
            const date = new Date(agendamento.data); // Cria o objeto Date
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
    
            // Verifica se a célula corresponde à data do agendamento
            cells.forEach((cell) => {
                if (cell.dataset.date === agendamento.data) { // Usa a data formatada
                    // Cria uma barra para o agendamento, ocupando a largura total da célula
                    const barraAgendamento = document.createElement("div");
                    barraAgendamento.style.width = "100%"; // Barra ocupa a largura total da célula
                    barraAgendamento.style.color = "#fff"; // Cor do texto (branco)
                    barraAgendamento.style.padding = "5px"; // Espaçamento para o texto dentro da barra
                    barraAgendamento.style.textAlign = "center"; // Centraliza o texto
                    barraAgendamento.style.fontSize = "0.9em"; // Ajuste do tamanho da fonte
                    barraAgendamento.style.borderRadius = "4px"; // Bordas arredondadas
                    barraAgendamento.style.marginBottom = "3px"; // Espaço entre as barras (se houver múltiplos)
                    barraAgendamento.style.cursor = "pointer"; // Cursor para indicar que é clicável
    
                    // Adiciona o título do agendamento e a data na barra
                    barraAgendamento.textContent = `${agendamento.titulo} - ${agendamento.data}`;
    
                    // Adiciona logs para depuração
                    console.log("Barbeiro:", agendamento.barbeiro); // Verifique qual barbeiro foi selecionado
    
                    // Verifica o barbeiro e altera a cor da barra
                    if (agendamento.barbeiro === 'Lucas Ferreira') {
                        console.log("Cor escolhida: Laranja");
                        barraAgendamento.style.backgroundColor = "orange"; // Altera a cor da barra para laranja
                    } else if (agendamento.barbeiro === 'Kennedy Esquitin') {
                        console.log("Cor escolhida: Azul escuro");
                        barraAgendamento.style.backgroundColor = "#003366"; // Altera a cor da barra para azul escuro
                    } else {
                        console.log("Cor escolhida: Verde (padrão)");
                        barraAgendamento.style.backgroundColor = "#4CAF50"; // Cor padrão verde
                    }
    
                    // Cria um container para os agendamentos
                    let container = cell.querySelector(".agendamentos-container");
                    if (!container) {
                        container = document.createElement("div");
                        container.classList.add("agendamentos-container");
                        container.style.height = "100px"; // Define uma altura fixa para a célula
                        container.style.overflowY = "auto"; // Adiciona o scroll vertical
                        container.style.padding = "5px";
                        cell.appendChild(container);
                    }
    
                    // Adiciona a barra ao container de agendamentos
                    container.appendChild(barraAgendamento);
    
                    // Adiciona o evento de clique na barrinha
                    barraAgendamento.addEventListener("click", () => {
                        openModal(agendamento);
                    });
                }
            });
        });
    });
}

// Função para buscar os agendamentos (Exemplo de como você poderia implementar isso)
function fetchAgendamentos() {
    return new Promise((resolve) => {
        resolve([
            {
                titulo: "Corte de Cabelo",
                data: "2024-11-26",
                barbeiro: "Lucas Ferreira"
            },
            {
                titulo: "Barba e Corte",
                data: "2024-11-26",
                barbeiro: "Kennedy Esquitin"
            },
            {
                titulo: "Corte Simples",
                data: "2024-11-27",
                barbeiro: "Outro Barbeiro"
            }
        ]);
    });
}

// Função para abrir o modal (exemplo de como seria)
function openModal(agendamento) {
    alert(`Detalhes do agendamento: ${agendamento.titulo} - ${agendamento.data}`);
}

// Chama a função para renderizar os agendamentos
renderizarAgendamentos();



    function openModal(agendamento) {
        const modal = document.getElementById("agendamento-modal");
        const modalContent = document.querySelector(".modal-content");

        // Limpa qualquer conteúdo anterior no modal (caso o modal tenha sido aberto e fechado anteriormente)
        modalContent.innerHTML = `
            <span id="close-modal" class="close-btn">&times;</span>
            <h2>Detalhes do Agendamento</h2>
            <p id="agendamento-data">Data: ${agendamento.data}</p>
            <p id="agendamento-hora">Hora: ${agendamento.hora || 'Não informada'}</p>
        `;

        // Criação e preenchimento dos campos adicionais
        const nomeUsuarioElement = document.createElement("p");
        nomeUsuarioElement.textContent = `Nome do Usuário: ${agendamento.nomeUsuario || 'Não informado'}`;
        
        const telefoneUsuarioElement = document.createElement("p");
        telefoneUsuarioElement.textContent = `Telefone: ${agendamento.telefoneUsuario || 'Não informado'}`;
        
        const barbeiroElement = document.createElement("p");
        barbeiroElement.textContent = `Barbeiro: ${agendamento.barbeiro || 'Não informado'}`;
        
        const checkinElement = document.createElement("p");
        checkinElement.textContent = `Check-in: ${agendamento.checkin ? 'Feito' : 'Não feito'}`;
    
        // Exibindo o array de serviços
        const servicosElement = document.createElement("p");
        if (agendamento.servicos && agendamento.servicos.length > 0) {
            servicosElement.textContent = `Serviços: ${agendamento.servicos.join(', ')}`;
        } else {
            servicosElement.textContent = "Serviços: Nenhum serviço informado";
        }
    
        // Adiciona os novos campos ao modal
        modalContent.appendChild(nomeUsuarioElement);
        modalContent.appendChild(telefoneUsuarioElement);
        modalContent.appendChild(barbeiroElement);
        modalContent.appendChild(checkinElement);
        modalContent.appendChild(servicosElement); // Adiciona o campo de serviços
    
        // Exibe o modal
        modal.style.display = "flex";

        // Reanexa o evento de fechamento
        const closeModalButton = document.getElementById("close-modal");
        closeModalButton.removeEventListener("click", closeModal);  // Remove o evento de clique existente
        closeModalButton.addEventListener("click", closeModal);  // Adiciona o evento de clique novamente
    }

    // Função para fechar o modal
    function closeModal() {
        const modal = document.getElementById("agendamento-modal");
        modal.style.display = "none";
    }

    // Evento de fechamento do modal
    const closeModalButton = document.getElementById("close-modal");
    closeModalButton.addEventListener("click", closeModal);

    // Inicializa o calendário
    renderizarAgendamentos();
});
