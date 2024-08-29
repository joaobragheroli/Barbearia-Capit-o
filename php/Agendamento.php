<?php

session_start();

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script defer src="https://unpkg.com/@phosphor-icons/web"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="shortcut icon" href="../img/img.ico" type="image/x-icon">
    <link rel="stylesheet" href="../css/Agendamento.css">

    <title>Cortes</title>
</head>

<body>
    <header>
        <?php
        // include './Hearder/Header.php';
        ?>
    </header>

    <main class="corpo-agendamento">
        <div class="AgendamentoResponsi"> <!-- Talvez use -->
            <ul class="agendamento">
                <a href="../melhorSERVICO.php">
                    <li>
                        <h2>Cabelo</h2>
                        <img src="../img/Cabelo.png">
                        <p class="agendamento-descricao">Em tesoura ou máquina. Como o cliente preferir</p>
                        <br>
                        <p class="product-price">$ 00,00</p>
                    </li>
                </a>
                <a href="../melhorSERVICO.php">
                    <li>
                        <h2>Barba e Cabelo</h2>
                        <img src="../img/Cabelo e Barba.png">
                        <p class="agendamento-descricao">Pacote completo de cabelo e barba</p>
                        <br>
                        <p class="product-price">$ 00,00</p>
                    </li>
                </a>
                <a href="../melhorSERVICO.php">
                    <li>
                        <h2>Barba</h2>
                        <img src="../img/barba.png">
                        <p class="agendamento-descricao">Corte e desenho profissional de barba</p>
                        <br>
                        <p class="product-price">$ 00,00</p>
                    </li>
                </a>
            </ul>
        </div>
    </main>

    <footer>
        <?php
        include './Footer/Footer.php';
        ?>
    </footer>
</body>

</html>