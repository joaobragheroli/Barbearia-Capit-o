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
const db = firebase.firestore();

document.addEventListener('DOMContentLoaded', function () {
    const calendar = document.getElementById('calendar');
    const currentMonthLabel = document.getElementById('currentMonth');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    const timeGrid = document.getElementById('time-grid');
    const scheduleBtn = document.getElementById('scheduleBtn');

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
    let selectedHourId = null; // Para armazenar o ID do horário selecionado
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

        for (let i = 0; i < firstDayIndex; i++) {
            const emptyDiv = document.createElement('div');
            calendar.appendChild(emptyDiv);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.textContent = day;
            dayElement.addEventListener('click', function () {
                if (selectedDay) {
                    selectedDay.classList.remove('selected');
                }
                selectedDay = dayElement;
                dayElement.classList.add('selected');
            });
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

    // Função para popular os horários
    function populateTimeSlots() {
        const startHour = 8;
        const endHour = 17;
        const interval = 30;
        let hourIndex = 0; // Índice para os IDs dos horários

        for (let hour = startHour; hour < endHour; hour++) {
            for (let minutes = 0; minutes < 60; minutes += interval) {
                const timeSlot = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
                const timeButton = document.createElement('button');
                timeButton.classList.add('time-slot');
                timeButton.textContent = timeSlot;

                // Atribuindo o ID do horário como um atributo ao botão
                timeButton.setAttribute('data-hour-id', hourIds[hourIndex]);

                // Adiciona um evento de clique para capturar o ID e mudar a cor
                timeButton.addEventListener('click', function () {
                    // Remove a classe de todos os botões
                    const allButtons = document.querySelectorAll('.time-slot');
                    allButtons.forEach(button => {
                        button.classList.remove('selected-time-slot'); // Remove a classe de todos
                    });

                    // Adiciona a classe ao botão clicado
                    this.classList.add('selected-time-slot'); // Marca o botão como selecionado

                    // Captura o ID do horário selecionado
                    selectedHourId = this.getAttribute('data-hour-id');
                    console.log(`ID selecionado: ${selectedHourId}`); // Aqui você pode usar o ID como quiser
                });

                timeGrid.appendChild(timeButton);
                hourIndex++; // Avança para o próximo ID
            }
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

    // Evento de clique do botão de agendar
    scheduleBtn.addEventListener('click', async function () {
        if (!selectedDay || !selectedHourId) {
            alert('Por favor, selecione um dia e um horário.');
            return;
        }

        const selectedDate = `${selectedDay.textContent}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
        
        // Busca o horário correspondente ao ID selecionado
        const selectedTime = await fetchTimeById(selectedHourId);

        if (!selectedTime) {
            alert('Horário não encontrado.');
            return;
        }

        // Adiciona o agendamento ao Firestore
        await db.collection('Agendamento').add({
            data: selectedDate,           // Data selecionada
            hora: selectedTime,           // Valor do horário selecionado
            idFuncionario: 'id_do_barbeiro', // Coloque o ID do barbeiro aqui
            idUsuario: 'id_do_usuario',    // Coloque o ID do usuário aqui
            idServico: 'id_do_servico'  // Coloque o ID do usuário aqui
        });

        const confirmationMessage = `Agendamento confirmado para o dia ${selectedDate} às ${selectedTime}`;

        // Exibe uma mensagem de confirmação
        alert(confirmationMessage);

        // Redireciona para a próxima página, passando o ID da hora selecionada
        // window.location.href = `../Home.html?hourId='${selectedHourId}'`; // Altere para o nome correto da próxima página
    });
});
