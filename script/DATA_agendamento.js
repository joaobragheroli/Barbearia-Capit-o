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

// Inicializando o Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

document.addEventListener('DOMContentLoaded', function () {
    const calendar = document.getElementById('calendar');
    const currentMonthLabel = document.getElementById('currentMonth');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    const timeGrid = document.getElementById('time-grid');
    const scheduleBtn = document.getElementById('scheduleBtn');

    let selectedServices = JSON.parse(localStorage.getItem('selectedServices')) || []; // Serviços selecionados
    let selectedBarberId = localStorage.getItem('selectedBarberId'); // ID do barbeiro

    console.log('Serviços selecionados:', selectedServices);
    console.log('Barbeiro selecionado:', selectedBarberId);

    // IDs dos horários
    const hourIds = [
        '2BF6vz9F2Ym0isAewNmL', // 08:00
        'D5Ka26QNgL1GdiWguCm5', // 08:30
        'FVhoByVqCY1oBeuNj3VA', // 09:00
        'K1coCAwb1bldmpkWgFWQ', // 09:30
        'MZOnDaGY0nlX4aiN9NWh', // 10:00
        'Qi2hi15SVlZJRqaKhWE2', // 10:30
        'SNrOeGRTnk9ZFRlSKUz1', // 11:00
        'a4dPRmuSXBLADpm6bLAt', // 11:30
        'gYm0gYk3D9EcrYAfORja', // 12:00
        'hkjV3fWbmriZHqWtZ1Te', // 12:30
        'hlEfRrbfwKq7DsEf7FCy', // 13:00
        'i7nppPvooOjYeUKSurcg', // 13:30
        'jZWhLKGXeCy7oAJCzMoa', // 14:00
        'lMbs7PdGM8iDlVIqL51V', // 14:30
        'ltS6OySP6ZpAFpM7vIJy', // 15:00
        'qRJ9ctnUIoepbX5IuyVw', // 15:30
        'qrcTisrTNgNTxQEnJpv7', // 16:00
        'rMvXdJCGZQijrVuVxjpD'  // 16:30
    ];

    let selectedDay = null;
    let selectedTime = null;
    let selectedHourId = null;
    let currentDate = new Date();


    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        currentMonthLabel.textContent = `${monthNames[month]} ${year}`;
        calendar.innerHTML = '';
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayIndex = new Date(year, month, 1).getDay();

        // Data atual sem horas, minutos e segundos
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        for (let i = 0; i < firstDayIndex; i++) {
            const emptyDiv = document.createElement('div');
            calendar.appendChild(emptyDiv);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.textContent = day;

            // Cria uma data para o dia atual do loop
            const dayDate = new Date(year, month, day);

            // Desabilita o botão se o dia já passou
            if (dayDate < today) {
                dayElement.classList.add('disabled'); // Adiciona uma classe para estilizar
                dayElement.style.pointerEvents = 'none'; // Impede o clique
                dayElement.style.color = 'gray'; // Muda a cor para indicar que está desabilitado
            } else {
                dayElement.addEventListener('click', function () {
                    if (selectedDay) {
                        selectedDay.classList.remove('selected');
                    }
                    selectedDay = dayElement;
                    dayElement.classList.add('selected');

                    console.log("Dia selecionado:", selectedDay.textContent);
                    // Chama populateTimeSlots após selecionar um dia
                    populateTimeSlots();
                });
            }
            calendar.appendChild(dayElement);
        }
    }

    renderCalendar(currentDate);

    prevMonthBtn.addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextMonthBtn.addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    })

    // Função para popular os horários
    async function populateTimeSlots() {
        const startHour = 8;
        const endHour = 17;
        const interval = 30;
        let hourIndex = 0;

        if (!selectedDay) {
            console.log("Nenhum dia selecionado.");
            return;
        }

        timeGrid.innerHTML = '';  // Limpa os horários ao popular novamente

        const selectedDayValue = selectedDay.textContent;
        const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedDayValue);

        // Obter o nome do barbeiro a partir do selectedBarberId
        const barberName = await fetchBarberNameById(selectedBarberId);

        for (let hour = startHour; hour < endHour; hour++) {
            for (let minutes = 0; minutes < 60; minutes += interval) {
                const timeSlot = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
                const timeId = hourIds[hourIndex];

                // Cria o botão de horário
                const timeButton = document.createElement('button');
                timeButton.classList.add('time-slot');
                timeButton.textContent = timeSlot;
                timeButton.setAttribute('data-hour-id', timeId);

                // Verifica a disponibilidade do horário apenas quando o botão é clicado
                timeButton.addEventListener('click', async function () {
                    // Remove a seleção anterior
                    const allButtons = document.querySelectorAll('.time-slot');
                    allButtons.forEach(button => button.classList.remove('selected-time-slot'));
                    this.classList.add('selected-time-slot');
                    selectedHourId = this.getAttribute('data-hour-id');
                    console.log(`ID selecionado: ${selectedHourId}`);

                    // Verifica a disponibilidade somente para o horário selecionado
                    const isAvailable = await checkTimeSlotAvailabilityForBarber(selectedDate, timeSlot, barberName);

                    // Exibe a disponibilidade do horário selecionado no console
                    if (isAvailable) {
                        console.log(`Horário ${timeSlot} disponível para o barbeiro ${barberName}`);
                    } else {
                        console.log(`Horário ${timeSlot} ocupado para o barbeiro ${barberName}`);
                    }
                });

                // Adiciona o botão ao grid de horários
                timeGrid.appendChild(timeButton);
                hourIndex++;
            }
        }
    }

    // Função para buscar o nome do barbeiro com base no selectedBarberId
    async function fetchBarberNameById(barberId) {
        try {
            const doc = await db.collection('funcionario').doc(barberId).get();
            if (doc.exists) {
                return doc.data().nome;  // Retorna o nome do barbeiro
            } else {
                console.error('Barbeiro não encontrado.');
                return null;
            }
        } catch (error) {
            console.error("Erro ao buscar nome do barbeiro: ", error);
            return null;
        }
    }


    let availableBarberName = null; // Variável para armazenar o nome do barbeiro disponível
    async function checkTimeSlotAvailabilityForBarber(date, time, barberName) {
        try {
            
            if (barberName === "Sem Preferência") {
                // IDs dos barbeiros
                const barberIds = ["m3FXSC4t8bBIBhJUDD5s", "xFBjnum08ucGkx8rdcg6", "MSol9Vb586vYSVzNKfsz"];
                // Buscar os nomes dos barbeiros
                const barberPromises = barberIds.map(async (id) => {
                    const barberDoc = await db.collection('funcionario').doc(id).get();
                    return barberDoc.exists ? barberDoc.data().nome : null;
                });
                const barberNames = await Promise.all(barberPromises);
                // Verificar a disponibilidade de cada barbeiro para o horário específico
                const availabilityPromises = barberNames.map(async (barber) => {
                    const querySnapshot = await db.collection('Agendamento')
                        .where('data', '==', date)  // Data específica
                        .where('hora', '==', time)  // Horário específico
                        .where('barbeiro', '==', barber)  // Verifica se o barbeiro está agendado
                        .get();
                    // Retorna o barbeiro e se está disponível
                    return {
                        barber,
                        isAvailable: querySnapshot.empty  // True se o horário estiver disponível
                    };
                });
                // Aguardar todas as verificações de disponibilidade
                const availabilityResults = await Promise.all(availabilityPromises);
                // Filtrando os barbeiros que estão disponíveis para o horário
                const availableBarbers = availabilityResults.filter(result => result.isAvailable);
                // Se houver pelo menos um barbeiro disponível
                if (availableBarbers.length > 0) {
                    console.log(`Horário ${time} disponível para os seguintes barbeiros:`);
                    // Exibe todos os barbeiros disponíveis
                    availableBarbers.forEach(barber => {
                        console.log(barber.barber);  // Exibe cada barbeiro disponível
                    });
                    // Escolhe o primeiro barbeiro disponível
                    availableBarberName = availableBarbers[0].barber;
                    console.log(`Barbeiro escolhido: ${availableBarberName}`); // Exibe o barbeiro escolhido
                    return true;  // Pelo menos um barbeiro está disponível
                } else {
                    // Se todos os barbeiros estiverem ocupados, esconde o botão correspondente
                    console.log(`Horário ${time} ocupado para todos os barbeiros.`);
                    return false;  // Todos os barbeiros estão ocupados
                }
            } else {
                // Verificar para um barbeiro específico
                const querySnapshot = await db.collection('Agendamento')
                    .where('data', '==', date)
                    .where('hora', '==', time)
                    .where('barbeiro', '==', barberName)
                    .get();
                return querySnapshot.empty;  // Retorna true se o horário estiver disponível
            }
        } catch (error) {
            console.error("Erro ao verificar disponibilidade do horário para o barbeiro: ", error);
            return false;
        }
    }


    // Adicionando evento de clique na data
    document.addEventListener('DOMContentLoaded', function () {
        const allDates = document.querySelectorAll('.date');  // Seleciona todos os botões ou elementos de data
        const allButtons = document.querySelectorAll('.time-slot');  // Botões de horário
        const date = "2024-11-21";  // Aqui, podemos pegar a data selecionada ou passá-la dinamicamente

        // Evento para quando o usuário clicar em uma data
        allDates.forEach(dateButton => {
            dateButton.addEventListener('click', async function () {
                const selectedDate = dateButton.textContent.trim();  // Pega a data clicada
                console.log(`Data selecionada: ${selectedDate}`);

                // Agora, verificamos todos os horários para a data selecionada
                allButtons.forEach(async button => {
                    const time = button.textContent.trim();  // Pega o horário do botão

                    // Verifica a disponibilidade para o horário e a data selecionada
                    const isAvailable = await checkTimeSlotAvailabilityForBarber(selectedDate, time, "Sem Preferência");

                    if (!isAvailable) {
                        // Se todos os barbeiros estiverem ocupados, esconde o botão
                        button.style.display = 'none';
                    }
                });
            });
        });
    });


    // Chama a função para popular os horários
    populateTimeSlots();

    // Função para buscar o horário correspondente ao ID
    async function fetchTimeById(hourId) {
        try {
            const doc = await db.collection('Hora').doc(hourId).get();
            if (doc.exists) {
                return doc.data().time; // Retorna o valor do campo 'time'
            } else {
                console.error('Horário não encontrado.');
                return null;
            }
        } catch (error) {
            console.error("Erro ao buscar horário: ", error);
        }
    }

    // Função para buscar detalhes do barbeiro
    async function fetchBarberDetails(barberId) {
        try {
            const doc = await db.collection('funcionario').doc(barberId).get(); // Altere aqui
            if (doc.exists) {
                return doc.data().nome; // Retorna apenas o nome do barbeiro
            } else {
                console.error('Barbeiro não encontrado.');
                return null;
            }
        } catch (error) {
            console.error("Erro ao buscar barbeiro: ", error);
        }
    }

    // Função para buscar detalhes dos serviços
    async function fetchServiceDetails(serviceIds) {
        const serviceNames = [];
        for (const serviceId of serviceIds) {
            try {
                const doc = await db.collection('Servico').doc(serviceId).get();
                if (doc.exists) {
                    serviceNames.push(doc.data().nome); // Adiciona apenas o nome do serviço ao array
                } else {
                    console.error(`Serviço ${serviceId} não encontrado.`);
                }
            } catch (error) {
                console.error(`Erro ao buscar serviço ${serviceId}: `, error);
            }
        }
        return serviceNames; // Retorna um array com os nomes dos serviços
    }


    // Função para obter dados do usuário logado
    async function obterDadosUsuario() {
        const usuario = auth.currentUser; // Pega o usuário logado

        let nome = '';
        let telefone = '';

        if (usuario) {
            const uid = usuario.uid; // ID do usuário logado
            const docRef = db.collection("Usuarios").doc(uid); // Referência ao documento do usuário
            const docSnap = await docRef.get(); // Faz a consulta

            if (docSnap.exists) {
                const dadosUsuario = docSnap.data();
                nome = dadosUsuario.nome; // Armazena o nome
                telefone = dadosUsuario.telefone; // Armazena o telefone
            }
        }

        return { nome, telefone }; // Retorna os valores
    }

    // Observador de estado de autenticação
    auth.onAuthStateChanged(async (usuario) => {
        if (usuario) {
            // Usuário está logado
            const { nome, telefone } = await obterDadosUsuario();
            console.log(`Nome: ${nome}\nTelefone: ${telefone}`); // Formatação com quebra de linha
        } else {
            // Usuário não está logado
            console.log("Nenhum usuário logado.");
        }
    });

    // Evento de clique do botão de agendar
    scheduleBtn.addEventListener('click', async function () {
        const selectedDayValue = selectedDay ? selectedDay.textContent : null;
        const selectedDate = selectedDayValue ? `${selectedDayValue}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}` : null;

        if (!selectedDate || !selectedHourId) {
            alert('Por favor, selecione um dia e um horário.');
            return;
        }

        // Busca detalhes do barbeiro e dos serviços
        const [barberName, serviceNames] = await Promise.all([
            fetchBarberDetails(selectedBarberId),
            fetchServiceDetails(selectedServices)
        ]);

        // Verifica se o usuário está logado
        const usuario = auth.currentUser; // Pega o usuário logado
        if (usuario) {
            const { nome, telefone } = await obterDadosUsuario();

            // Monta o objeto de agendamento
            const appointment = {
                data: selectedDate ? new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedDayValue) : null, // Armazena com
                hora: await fetchTimeById(selectedHourId),
                barbeiro: selectedBarberId === "neqHWiSiMSoRS25p0D57" ? availableBarberName : barberName, 
                servicos: serviceNames, // Nomes dos serviços
                Nome_Usuario: nome, // Armazena o nome do usuário
                Telefone_Usuario: telefone, // Armazena o telefone do usuário
                status: 'agendado' // ou outro status que você desejar
            };

            // Salva o agendamento no Firestore
            try {
                await db.collection('Agendamento').add(appointment);
                alert('Agendamento realizado com sucesso!');
                window.location.href = '../Home.html';
            } catch (error) {
                console.error("Erro ao agendar: ", error);
                alert('Erro ao realizar o agendamento.');
            }
        } else {
            // Usuário não está logado
            console.log("Nenhum usuário logado.");
            alert('Você precisa estar logado para agendar um serviço.');
        }
    });
});


async function deletePastAppointments() {
    try {
        // Obtém a data e hora atual
        const currentDate = new Date();

        // Definir a data limite (3 dias atrás)
        const limitDate = new Date(currentDate);
        limitDate.setDate(currentDate.getDate() - 1);  // Subtrai 3 dias da data atual

        // Busca todos os agendamentos na coleção principal (Agendamento)
        const snapshot = await db.collection('Agendamento').get();

        // Para cada agendamento encontrado
        snapshot.forEach(async (doc) => {
            const appointment = doc.data();

            // Verificar se a subcoleção de agendamentos existe
            if (appointment.agendamentos && appointment.agendamentos.length > 0) {
                // Para cada agendamento na subcoleção "agendamentos"
                appointment.agendamentos.forEach(async (agendamento) => {
                    const appointmentDate = agendamento.data.toDate ? agendamento.data.toDate() : new Date(agendamento.data);

                    // Verifica se o agendamento passou dos 3 dias
                    if (appointmentDate < limitDate) {
                        // Exclui o agendamento se a data for anterior aos 3 dias
                        await db.collection('Agendamento').doc(doc.id).collection('agendamentos').doc(agendamento.id).delete();
                        console.log(`Agendamento de ${appointment.Nome_Usuario} foi excluído da subcoleção!`);
                    }
                });
            }
        });
    } catch (error) {
        console.error("Erro ao excluir agendamentos antigos:", error);
    }
}

// Rodar a função a cada 24 horas (86400000 ms)
setInterval(deletePastAppointments, 86400000);

// Ou você pode rodar a função uma vez ao carregar a página, para já verificar ao inicializar
deletePastAppointments();
