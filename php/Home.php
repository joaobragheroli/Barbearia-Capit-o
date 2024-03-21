<?php

session_start();

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <script defer src="https://unpkg.com/@phosphor-icons/web"></script>
    <link rel="shortcut icon" href="../img/img.ico" type="image/x-icon">
    <link rel="stylesheet" href="../css/style.css">
    <script defer src="../script/script.js"></script>
    <title>Document</title>
</head>
<body>
<header>
        <?php
        include './Header.php';
        ?>
    </header>
<main class="corpo-home">
        <section class="hidden">
            <h1>Bla Bla Bla</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, voluptatum quibusdam repellendus iure,
                amet, velit necessitatibus harum veritatis illo sint quod officiis neque. Asperiores nihil quidem
                voluptates sint veritatis nisi!</p>
        </section>

        <section class="hidden">
            <h1>Coisas</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis unde velit ab magnam nisi corporis, error
                architecto mollitia autem, explicabo, soluta qui voluptas aliquam facere. Ab beatae placeat ipsa.
                Consectetur?</p>
        </section>

        <section class="hidden">
            <img src="../img/img.jpg" alt="" height="100px">
        </section>
</main>
<footer>
        <?php
        include './Footer.php';
        ?>
    </footer>
</body>
</html>
