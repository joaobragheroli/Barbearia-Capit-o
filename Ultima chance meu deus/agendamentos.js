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
                        barraAgendamento.style.backgroundColor = "#4CAF50"; // Cor de fundo verde
                        barraAgendamento.style.color = "#fff"; // Cor do texto (branco)
                        barraAgendamento.style.padding = "5px"; // Espaçamento para o texto dentro da barra
                        barraAgendamento.style.textAlign = "center"; // Centraliza o texto
                        barraAgendamento.style.fontSize = "0.9em"; // Ajuste do tamanho da fonte
                        barraAgendamento.style.borderRadius = "4px"; // Bordas arredondadas
                        barraAgendamento.style.marginBottom = "3px"; // Espaço entre as barras (se houver múltiplos)
                        barraAgendamento.style.cursor = "pointer"; // Cursor para indicar que é clicável
    
                        // Adiciona o título do agendamento e a data na barra
                        barraAgendamento.textContent = `${agendamento.titulo} - ${agendamento.data}`;
    
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
    
                        // Adiciona o evento de clique na barrinha verde
                        barraAgendamento.addEventListener("click", () => {
                            openModal(agendamento);
                        });
    
                        // Se o barbeiro for Lucas Ferreira, muda a cor da barra para laranja
                        if (agendamento.barbeiro === 'Lucas Ferreira') {
                            barraAgendamento.style.backgroundColor = "orange"; // Altera a cor da barra para laranja
                        }
                    }
                });
            });
        });
    }
    

    function openModal(agendamento) {
        // Preenche os campos do modal com os dados do agendamento
        document.getElementById("agendamento-data").textContent = `Data: ${agendamento.data}`;
        document.getElementById("agendamento-hora").textContent = `Hora: ${agendamento.hora || 'Não informada'}`; // Exemplo de campo hora
    
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
        const modalContent = document.querySelector(".modal-content");
        modalContent.appendChild(nomeUsuarioElement);
        modalContent.appendChild(telefoneUsuarioElement);
        modalContent.appendChild(barbeiroElement);
        modalContent.appendChild(checkinElement);
        modalContent.appendChild(servicosElement); // Adiciona o campo de serviços
    
        // Exibe o modal
        document.getElementById("agendamento-modal").style.display = "flex";
    }
    

    // Função para fechar o modal
    function closeModal() {
        document.getElementById("agendamento-modal").style.display = "none";
    }

    // Evento de fechamento do modal
    document.getElementById("close-modal").addEventListener("click", closeModal);

    // Inicializa o calendário
    renderizarAgendamentos();
});
