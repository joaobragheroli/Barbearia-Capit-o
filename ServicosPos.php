<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página de Seleção de Cards</title>
    <style>
        /* Estilos para os cards */
        .card-container {
            display: grid;
            gap: 10px;
            justify-content: center;
            /* Definindo o layout da grade: 4 colunas, cada uma com 1fr de largura */
            grid-template-columns: repeat(3, 1fr);
        }

        .card {
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 20px;
            text-align: center;
            box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: background-color 0.3s ease;
            /* Garante que todos os cards tenham a mesma altura */
            height: 150px;
        }

        .card.selected {
            background-color: #28a745;
            color: white;
        }

        .mid-button {
            grid-column: 2 / 3; /* Centraliza o botão na segunda coluna */
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-align: center;
        }

        .mid-button:hover {
            background-color: #0056b3;
        }
    </style>
</head>

<body>

    <h1>Selecione os Cards</h1>
    <div class="card-container">
        <div class="card" onclick="toggleCard(this)">
            <h2>Card 1</h2>
        </div>
        <div class="card" onclick="toggleCard(this)">
            <h2>Card 2</h2>
        </div>
        <div class="card" onclick="toggleCard(this)">
            <h2>Card 3</h2>
        </div>
        <div class="card" onclick="toggleCard(this)">
            <h2>Card 4</h2>
        </div>
        <div class="card" onclick="toggleCard(this)">
            <h2>Card 5</h2>
        </div>
        
        <!-- Botão Centralizado -->
        <button class="mid-button">Botão Central</button>
        
        <div class="card" onclick="toggleCard(this)">
            <h2>Card 6</h2>
        </div>
        <div class="card" onclick="toggleCard(this)">
            <h2>Card 7</h2>
        </div>
        <div class="card" onclick="toggleCard(this)">
            <h2>Card 8</h2>
        </div>
        <div class="card" onclick="toggleCard(this)">
            <h2>Card 9</h2>
        </div>
        <div class="card" onclick="toggleCard(this)">
            <h2>Card 10</h2>
        </div>
        <div class="card" onclick="toggleCard(this)">
            <h2>Card 11</h2>
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
