// Instalar o calendario Fullcalender
document.addEventListener('DOMContentLoaded', function () {
    // Recebe o id
    var calendarEl = document.getElementById('calendar');
    // Instalar o calendario Fullcalender
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'pt-br'
    });
    calendar.render();
});
// Estilo do calendario as infromaçoes
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {

        // Cria o cabeçalho
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },

        // Define o idioma
        locale: 'pt-br',

        // Define o dia que começa 
        // initialDate: '2024-01-01',
        initialDate: '2023-01-01',

        // Permite clicar nos nomes e nos dias da semana
        navLinks: true, 

        // Permite clicar e arrastar o mouse
        selectable: true,

        // Indica o tamanho da area selecionada 
        selectMirror: true,
        
        // ver se realmente vai funcionar na hora que linlar o BD

                        // select: function (arg) {
                            // var title = prompt('Nome Cliente:');
                            // if (title) {
                                // calendar.addEvent({
                                    // title: title,
                                    // start: arg.start,
                                    // end: arg.end,
                                    // allDay: arg.allDay
                                // })
                            // }
                            // calendar.unselect()
                        // },
                        // eventClick: function (arg) {
                            // if (confirm('Deseja Excluir Este Horario? ')) {
                                // arg.event.remove()
                            // }
                        // },

        // Permite arrastar e redirecionar os eventos
        editable: true,

        // Numero maximo de um determinado dia se for true vai ser limitado a quantidade com a altura da celula
        // ver de limitar com os horarios definitos
        dayMaxEvents: true, 

        events: 'listar_evento.php'
    });
    calendar.render();
});