document.addEventListener('DOMContentLoaded', function () {
    const calendar = document.getElementById('calendar');
    const currentMonthLabel = document.getElementById('currentMonth');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    const timeGrid = document.getElementById('time-grid');
    const scheduleBtn = document.getElementById('scheduleBtn');

    let selectedDay = null;
    let selectedTime = null;

    // Data atual
    let currentDate = new Date();
    
    // Atualiza o calendário quando muda o mês
    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        
        // Definir o nome do mês
        const monthNames = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];
        currentMonthLabel.textContent = `${monthNames[month]} ${year}`;
        
        // Limpa o calendário antes de renderizar
        calendar.innerHTML = '';
        
        // Número de dias no mês
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        // Encontrar o primeiro dia do mês
        const firstDayIndex = new Date(year, month, 1).getDay();

        // Preencher os dias vazios antes do 1º dia do mês
        for (let i = 0; i < firstDayIndex; i++) {
            const emptyDiv = document.createElement('div');
            calendar.appendChild(emptyDiv);
        }

        // Preencher os dias do mês
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.textContent = day;

            dayElement.addEventListener('click', function () {
                // Desselecionar o dia anterior
                if (selectedDay) {
                    selectedDay.classList.remove('selected');
                }

                // Selecionar o novo dia
                selectedDay = dayElement;
                dayElement.classList.add('selected');
            });

            calendar.appendChild(dayElement);
        }
    }

    // Inicializar o calendário com a data atual
    renderCalendar(currentDate);

    // Botões de navegação do mês
    prevMonthBtn.addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextMonthBtn.addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    // Função para popular slots de tempo
    function populateTimeSlots() {
        timeGrid.innerHTML = '';
        const startHour = 8; // Início do expediente (8h)
        const endHour = 17; // Término do expediente (17h)
        const interval = 30; // Intervalo de 30 minutos

        for (let hour = startHour; hour < endHour; hour++) {
            for (let minutes = 0; minutes < 60; minutes += interval) {
                const timeSlot = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
                const timeElement = document.createElement('div');
                timeElement.classList.add('time-slot');
                timeElement.textContent = timeSlot;

                timeElement.addEventListener('click', function () {
                    // Desmarcar outro horário selecionado
                    if (selectedTime) {
                        const previouslySelected = document.querySelector('.time-slot.selected');
                        if (previouslySelected) previouslySelected.classList.remove('selected');
                    }
                    selectedTime = timeSlot;
                    timeElement.classList.add('selected');
                });

                timeGrid.appendChild(timeElement);
            }
        }
    }

    populateTimeSlots();

    // Função para agendar e redirecionar
    scheduleBtn.addEventListener('click', function () {
        if (!selectedDay || !selectedTime) {
            alert('Por favor, selecione um dia e um horário.');
            return;
        }

        const selectedDate = `${selectedDay.textContent}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
        const confirmationMessage = `Agendamento confirmado para o dia ${selectedDate} às ${selectedTime}`;
        
        // Exibe uma mensagem de confirmação
        alert(confirmationMessage);

        // Redireciona para a página principal ou outra página desejada
        window.location.href = '../..//html/Home.html'; 
    });
});
