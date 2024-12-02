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

    let currentDate = new Date(); // Data inicial exibida no calendário

    // Função para buscar os agendamentos no Firestore
    async function fetchAgendamentos() {
        const agendamentos = [];
        try {
            const snapshot = await db.collection("Agendamento").get();
            snapshot.forEach((doc) => {
                const data = doc.data();
                const timestamp = data.data; // Campo 'data' no Firestore
                const date = timestamp.toDate(); // Converte para objeto Date
                const formattedDate = date.toISOString().split('T')[0]; // Formata como 'YYYY-MM-DD'

                agendamentos.push({
                    titulo: data.titulo || 'Agendamento Sem Título',
                    data: formattedDate,
                    hora: data.hora || 'Hora Não Informada',
                    servicos: data.servicos || ['Nenhum serviço informado'],
                    status: data.status || 'Não informado',
                    nomeUsuario: data.Nome_Usuario || 'Não informado',
                    telefoneUsuario: data.Telefone_Usuario || 'Não informado',
                    barbeiro: data.barbeiro || 'Não informado',
                    checkin: data.checkin || false
                });
            });
        } catch (error) {
            console.error("Erro ao buscar agendamentos:", error);
        }
        return agendamentos;
    }

    // Função para renderizar o calendário
    function renderCalendar(date, agendamentos) {
        const calendarBody = document.getElementById("calendar-body");
        const currentMonth = document.getElementById("current-month");

        // Limpa o corpo do calendário
        calendarBody.innerHTML = "";

        // Define o mês e o ano no título
        const monthNames = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];
        currentMonth.textContent = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;

        // Configurações para o início do mês
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        const startDay = firstDay.getDay();

        // Renderiza as células do calendário
        let row = document.createElement("tr");
        for (let i = 0; i < startDay; i++) {
            row.appendChild(document.createElement("td")); // Espaços em branco antes do primeiro dia
        }
        for (let day = 1; day <= lastDay.getDate(); day++) {
            const cell = document.createElement("td");
            const cellDate = new Date(date.getFullYear(), date.getMonth(), day);
            const formattedDate = cellDate.toISOString().split("T")[0];
            cell.dataset.date = formattedDate;
            cell.textContent = day;

            // Adiciona os agendamentos ao dia correspondente
            const agendamentosDoDia = agendamentos.filter(a => a.data === formattedDate);
            if (agendamentosDoDia.length > 0) {
                const container = document.createElement("div");
                container.classList.add("agendamentos-container");
                container.style.height = "100px";
                container.style.overflowY = "auto";
                container.style.padding = "5px";

                agendamentosDoDia.forEach(agendamento => {
                    const barraAgendamento = document.createElement("div");
                    barraAgendamento.style.width = "100%";
                    barraAgendamento.style.color = "#fff";
                    barraAgendamento.style.padding = "5px";
                    barraAgendamento.style.textAlign = "center";
                    barraAgendamento.style.fontSize = "0.9em";
                    barraAgendamento.style.borderRadius = "4px";
                    barraAgendamento.style.marginBottom = "3px";
                    barraAgendamento.style.cursor = "pointer";

                    barraAgendamento.textContent = `${agendamento.titulo} - ${agendamento.hora}`;

                    // Define a cor baseada no barbeiro
                    if (agendamento.barbeiro === 'Lucas Ferreira') {
                        barraAgendamento.style.backgroundColor = "orange";
                    } else if (agendamento.barbeiro === 'Kennedy Esquitin') {
                        barraAgendamento.style.backgroundColor = "#003366";
                    } else {
                        barraAgendamento.style.backgroundColor = "#4CAF50";
                    }

                    // Evento de clique para abrir o modal
                    barraAgendamento.addEventListener("click", () => {
                        openModal(agendamento);
                    });

                    container.appendChild(barraAgendamento);
                });

                cell.appendChild(container);
            }

            row.appendChild(cell);
            if ((day + startDay) % 7 === 0 || day === lastDay.getDate()) {
                calendarBody.appendChild(row);
                row = document.createElement("tr");
            }
        }
    }

    // Função para abrir o modal
    function openModal(agendamento) {
        const modal = document.getElementById("agendamento-modal");
        const modalContent = document.querySelector(".modal-content");

        modalContent.innerHTML = `
            <span id="close-modal" class="close-btn">&times;</span>
            <h2>Detalhes do Agendamento</h2>
            <p>Data: ${agendamento.data}</p>
            <p>Hora: ${agendamento.hora}</p>
            <p>Nome do Usuário: ${agendamento.nomeUsuario}</p>
            <p>Telefone: ${agendamento.telefoneUsuario}</p>
            <p>Barbeiro: ${agendamento.barbeiro}</p>
            <p>Serviços: ${agendamento.servicos.join(', ')}</p>
            <p>Check-in: ${agendamento.checkin ? 'Feito' : 'Não feito'}</p>
        `;

        modal.style.display = "flex";
        document.getElementById("close-modal").addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // Configura os botões de navegação de mês
    document.getElementById("prev-month").addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        fetchAgendamentos().then(agendamentos => renderCalendar(currentDate, agendamentos));
    });

    document.getElementById("next-month").addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        fetchAgendamentos().then(agendamentos => renderCalendar(currentDate, agendamentos));
    });

    // Função para o botão "Hoje"
    document.getElementById("today").addEventListener("click", () => {
        currentDate = new Date(); // Define a data como o dia de hoje
        fetchAgendamentos().then(agendamentos => renderCalendar(currentDate, agendamentos)); // Re-renderiza o calendário
    });

    // Inicializa o calendário com os agendamentos
    fetchAgendamentos().then(agendamentos => renderCalendar(currentDate, agendamentos));
});
