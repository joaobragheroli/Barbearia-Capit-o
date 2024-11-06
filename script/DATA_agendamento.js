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
    });

    // Função para verificar a disponibilidade do horário
    // async function checkTimeSlotAvailability(date, time) {
    // try {
    // const querySnapshot = await db.collection('Agendamento')
    // .where('data', '==', date) // Agora compara diretamente com o objeto Date
    // .where('hora', '==', time) // Verifica se a hora é igual
    // .get();

    // return querySnapshot.empty; // Retorna true se o horário estiver disponível
    // } catch (error) {
    // console.error("Erro ao verificar disponibilidade do horário: ", error);
    // return false; // Em caso de erro, considera que o horário não está disponível
    // }
    // }   

    // Função para popular os horários
    async function populateTimeSlots() {
        const startHour = 8;
        const endHour = 17;
        const interval = 30;
        let hourIndex = 0;

        if (!selectedDay) {
            console.error("Nenhum dia selecionado.");
            return;
        }

        timeGrid.innerHTML = '';

        const selectedDayValue = selectedDay.textContent;
        const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedDayValue);

        // Obter o nome do barbeiro a partir do selectedBarberId
        const barberName = await fetchBarberNameById(selectedBarberId);

        for (let hour = startHour; hour < endHour; hour++) {
            for (let minutes = 0; minutes < 60; minutes += interval) {
                const timeSlot = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
                const timeId = hourIds[hourIndex];

                // Verifica a disponibilidade do horário para o barbeiro selecionado
                const isAvailable = await checkTimeSlotAvailabilityForBarber(selectedDate, timeSlot, barberName);

                if (isAvailable) {
                    const timeButton = document.createElement('button');
                    timeButton.classList.add('time-slot');
                    timeButton.textContent = timeSlot;
                    timeButton.setAttribute('data-hour-id', timeId);

                    // Adiciona um evento de clique para capturar o ID e mudar a cor
                    timeButton.addEventListener('click', function () {
                        const allButtons = document.querySelectorAll('.time-slot');
                        allButtons.forEach(button => button.classList.remove('selected-time-slot'));
                        this.classList.add('selected-time-slot');
                        selectedHourId = this.getAttribute('data-hour-id');
                        console.log(`ID selecionado: ${selectedHourId}`);
                    });

                    timeGrid.appendChild(timeButton);
                }

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

    // Função para verificar a disponibilidade do horário para o barbeiro selecionado (agora com o nome)
    async function checkTimeSlotAvailabilityForBarber(date, time, barberName) {
        try {
            const querySnapshot = await db.collection('Agendamento')
                .where('data', '==', date)      // Filtra pela data
                .where('hora', '==', time)      // Filtra pela hora
                .where('barbeiro', '==', barberName) // Filtra pelo nome do barbeiro
                .get();

            return querySnapshot.empty; // Retorna true se o horário estiver disponível para o barbeiro
        } catch (error) {
            console.error("Erro ao verificar disponibilidade do horário para o barbeiro: ", error);
            return false;
        }
    }


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
                barbeiro: barberName, // Nome do barbeiro
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