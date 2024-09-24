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
        
        // select: function (arg) {
            // var title = prompt('Event Title:');
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
            // if (confirm('Are you sure you want to delete this event?')) {
                // arg.event.remove()
            // }
        // },

        // Permite arrastar e redirecionar os eventos
        editable: true,

        // Numero maximo de um determinado dia se for true vai ser limitado a quantidade com a altura da celula
        // ver de limitar com os horarios definitos
        dayMaxEvents: true, 

        events: [
            {
                title: 'All Day Event',
                start: '2023-01-01'
            },
            {
                title: 'Long Event',
                start: '2023-01-07',
                end: '2023-01-10'
            },
            {
                groupId: 999,
                title: 'Repeating Event',
                start: '2023-01-09T16:00:00'
            },
            {
                groupId: 999,
                title: 'Repeating Event',
                start: '2023-01-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2023-01-11',
                end: '2023-01-13'
            },
            {
                title: 'Meeting',
                start: '2023-01-12T10:30:00',
                end: '2023-01-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2023-01-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2023-01-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2023-01-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2023-01-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2023-01-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2023-01-28'
            }
        ]
    });
    calendar.render();
});