// calendar.js

// Variáveis de controle do calendário
let currentDate = new Date();
const calendarBody = document.getElementById("calendar-body");
const currentMonthElement = document.getElementById("current-month");

// Função para renderizar o calendário
function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const monthNames = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];
    currentMonthElement.textContent = `${monthNames[month]} de ${year}`;
    calendarBody.innerHTML = ""; // Limpa o calendário

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let date = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement("td");
            if (i === 0 && j < firstDay) {
                cell.textContent = "";
            } else if (date > daysInMonth) {
                cell.textContent = "";
            } else {
                const span = document.createElement("span");
                span.textContent = date;

                const formattedDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(date).padStart(2, "0")}`;
                cell.dataset.date = formattedDate; // Adiciona data formatada no dataset
                cell.appendChild(span);
                date++;
            }
            row.appendChild(cell);
        }
        calendarBody.appendChild(row);
    }
}

// Funções para navegação do mês
function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
}

// Inicializa o calendário ao carregar a página
renderCalendar();
