<?php
    include '../../SQL/conexao.php';  
?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script defer src="https://unpkg.com/@phosphor-icons/web"></script>
    <link rel="stylesheet" href="mostraServicos.css">
    <title>Página de Seleção de Cards</title>
</head>

<body>
    
    <div class="cards_Geral">
        <!-- Botão Centralizado -->
        <div class="conteinerButton">
            <p class="TituloExplic">Faça o seu Agendamento</p>
            <a href="DATA_Agendamento.php"><button class="mid-button">Agendar</button></a>
        </div>
    </div>

    <div class="FundoImg">

    </div>

    


    <!-- Cards com os serviços -->
    <div class="container">
        <div class="card" onclick="toggleCard(this)">
            <div class="imgBx">
                <img src="../../img/barba.png" alt="" class="user-image">
            </div>
            <div class="contentBx">
                <h2>Barba</h2>
                <div class="size">
                    <h3>Tempo: 00:30</h3>
                </div>
                <div class="color">
                    <h3>Valor: 30:00</h3>
                </div>
                <a href="#">Agendar</a>
            </div>
        </div>
        <div class="card" onclick="toggleCard(this)">
            <div class="imgBx">
                <img src="../../img/corte.png" alt="" class="user-image">
            </div>
            <div class="contentBx">
                <h2>Corte e Barba</h2>
                <div class="size">
                    <h3>Tempo: 1:00</h3>
                </div>
                <div class="color">
                    <h3>Valor: 60:00</h3>
                </div>
                <a href="#">Agendar</a>
            </div>
        </div>
        <div class="card" onclick="toggleCard(this)">
            <div class="imgBx">
                <img src="../../img/corte.png" alt="" class="user-image"></a>
            </div>
            <div class="contentBx">
                <h2>Corte</h2>
                <div class="size">
                    <h3>Tempo: 00:40</h3>
                </div>
                <div class="color">
                    <h3>Valor: 30:00</h3>
                </div>
                <a href="#">Agendar</a>
            </div>
        </div>

        <div class="card" onclick="toggleCard(this)">
            <div class="imgBx">
                <img src="../../img/barba.png" alt="" class="user-image">
            </div>
            <div class="contentBx">
                <h2>Corte e Barba e Sobrancelha</h2>
                <div class="size">
                    <h3>Tempo: 1:00</h3>
                </div>
                <div class="color">
                    <h3>Valor: 70:00</h3>
                </div>
                <a href="#">Agendar</a>
            </div>
        </div>
        <div class="card" onclick="toggleCard(this)">
            <div class="imgBx">
                <img src="../../img/progressiva.png" alt="" class="user-image">
            </div>
            <div class="contentBx">
                <h2>Progressiva</h2>
                <div class="size">
                    <h3>Tempo: 00:35</h3>
                </div>
                <div class="color">
                    <h3>Valor: 60:00</h3>
                </div>
                <a href="#">Agendar</a>
            </div>
        </div>

        <div class="card" onclick="toggleCard(this)">
            <div class="imgBx">
                <img src="../../img/progressiva.png" alt="" class="user-image">
            </div>
            <div class="contentBx">
                <h2>Relaxamento</h2>
                <div class="size">
                    <h3>Tempo: 00:20</h3>
                </div>
                <div class="color">
                    <h3>Valor: 35:00</h3>
                </div>
                <a href="#">Agendar</a>
            </div>
        </div>
        <div class="card" onclick="toggleCard(this)">
            <div class="imgBx">
                <img src="../../img/progressiva.png" alt="" class="user-image">
            </div>
            <div class="contentBx">
                <h2>Luzes(Consultar o barneiro)</h2>
                <div class="size">
                    <h3>Tempo: 00:30</h3>
                </div>
                <div class="color">
                    <h3>Valor: 60:00</h3>
                </div>
                <a href="#">Agendar</a>
            </div>
        </div>
        <div class="card" onclick="toggleCard(this)">
            <div class="imgBx">
                <img src="../../img/hidratação.png" alt="" class="user-image">
            </div>
            <div class="contentBx">
                <h2>Platinado(Consultar o barneiro)</h2>
                <div class="size">
                    <h3>Tempo: 00:30</h3>
                </div>
                <div class="color">
                    <h3>Valor: 100:00</h3>
                </div>
                <a href="#">Agendar</a>
            </div>
        </div>
        <div class="card" onclick="toggleCard(this)">
            <div class="imgBx">
                <img src="../../img/corte.png" alt="" class="user-image">
            </div>
            <div class="contentBx">
                <h2>Pezinho</h2>
                <div class="size">
                    <h3>Tempo: 00:10</h3>
                </div>
                <div class="color">
                    <h3>Valor: 15:00</h3>
                </div>
                <a href="#">Agendar</a>
            </div>
        </div>
        <div class="card" onclick="toggleCard(this)">
            <div class="imgBx">
                <img src="../../img/hidratação.png" alt="" class="user-image">
            </div>
            <div class="contentBx">
                <h2>Hidratação</h2>
                <div class="size">
                    <h3>Tempo: 00:30</h3>
                </div>
                <div class="color">
                    <h3>Valor: 30:00</h3>
                </div>
                <a href="#">Agendar</a>
            </div>
        </div>
        <div class="card" onclick="toggleCard(this)">
            <div class="imgBx">
                <img src="../../img/corte.png" alt="" class="user-image">
            </div>
            <div class="contentBx">
                <h2>Corte e Sobrancelha</h2>
                <div class="size">
                    <h3>Tempo: 00:40</h3>
                </div>
                <div class="color">
                    <h3>Valor: 40:00</h3>
                </div>
                <a href="#">Agendar</a>
            </div>
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