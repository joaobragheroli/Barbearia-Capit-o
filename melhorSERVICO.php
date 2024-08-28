<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página de Seleção de Cards</title>
    <style>
        body {
            margin: 0;
        }

        .cards_Geral {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            height: 100%;
            gap: 50px;
        }

        /* Estilos para os cards */
        .card-container {
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
            margin-top: 100px;
            margin-left: 10%;
            margin-right: 10%;
        }

        .card {
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 20px;
            width: 200px;
            height: 300px;
            text-align: center;
            box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .card.selected {
            background-color: #28a745;
            color: white;
        }

        .card img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin-bottom: 15px;
            border: 3px solid antiquewhite;
            padding: 4px;
        }

        .card h1 {
            padding-top: 30px;
        }

        /* Estilo do button */
        .conteinerButton {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 50px;
            width: 100%;
            height: 70vh;
            background-color: purple;
        }

        .mid-button {
            height: 90px;
            width: 300px;
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            text-align: center;
        }

        .mid-button:hover {
            background-color: #0056b3;
        }

        .TituloExplic {
            font-size: 100px;
        }
    </style>
</head>

<body>
    <div class="cards_Geral">

        <!-- Botão Centralizado -->
        <div class="conteinerButton">
            <p class="TituloExplic">Faça o seu Agendamento</p>
            <button class="mid-button">
                <h1>Agendar</h1>
            </button>
        </div>

        <!-- Cards com os serviços -->
        <div class="card-container">
            <div class="card" onclick="toggleCard(this)">
                <img src="./img/barba.png" alt="">
                <h1>Card 1</h1>
                <h2>Valor</h2>
            </div>
            <div class="card" onclick="toggleCard(this)">
                <img src="./img/barba.png" alt="">
                <h1>Card 2</h1>
                <h2>Valor</h2>
            </div>
            <div class="card" onclick="toggleCard(this)">
                <img src="./img/barba.png" alt="">
                <h1>Card 3</h2>
                    <h2>Valor</h2>
            </div>
            <div class="card" onclick="toggleCard(this)">
                <img src="./img/barba.png" alt="">
                <h1>Card 4</h2>
                    <h2>Valor</h2>
            </div>
            <div class="card" onclick="toggleCard(this)">
                <img src="./img/barba.png" alt="">
                <h1>Card 5</h2>
                    <h2>Valor</h2>
            </div>
            <div class="card" onclick="toggleCard(this)">
                <img src="./img/barba.png" alt="">
                <h1>Card 6</h2>
                    <h2>Valor</h2>
            </div>
            <div class="card" onclick="toggleCard(this)">
                <img src="./img/barba.png" alt="">
                <h1>Card 7</h2>
                    <h2>Valor</h2>
            </div>
            <div class="card" onclick="toggleCard(this)">
                <img src="./img/barba.png" alt="">
                <h1>Card 8</h2>
                    <h2>Valor</h2>
            </div>
            <div class="card" onclick="toggleCard(this)">
                <img src="./img/barba.png" alt="">
                <h1>Card 9</h2>
                    <h2>Valor</h2>
            </div>
            <div class="card" onclick="toggleCard(this)">
                <img src="./img/barba.png" alt="">
                <h1>Card 10</h2>
                    <h2>Valor</h2>
            </div>
            <div class="card" onclick="toggleCard(this)">
                <img src="./img/barba.png" alt="">
                <h1>Card 11</h2>
                    <h2>Valor</h2>
            </div>
        </div>

    </div>
    <script>
        // Função para alternar a seleção do card
        function toggleCard(card) {
            card.classList.toggle('selected');
        }
    </script>

</body>

</html>