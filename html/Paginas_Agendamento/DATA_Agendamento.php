<?php
    include '../../SQL/conexao.php';  
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agendamento com Calendário Fixo</title>
    <link rel="stylesheet" href="DATA_Agendamento.css">
</head>
<body>
    <div class="main-container">
        <div class="calendar-container">
            <h1>Agendamento</h1>

            <div class="calendar-header">
                <button id="prevMonth">Anterior</button>
                <h2 id="currentMonth"></h2>
                <button id="nextMonth">Próximo</button>
            </div>

            <div class="calendar-grid" id="calendar"></div>
        </div>

        <div class="time-container">
            <h2>Selecione o Horário:</h2>
            <div id="time-grid" class="time-grid"></div>

            <button class="scheduleBtn"  id="scheduleBtn">Agendar</button>
        </div>
    </div>

    <script src="../../script/DATA_agendamento.js"></script>
</body>
</html>
