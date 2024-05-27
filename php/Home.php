<?php

session_start();

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script defer src="https://unpkg.com/@phosphor-icons/web"></script>
    <script defer src="../script/script.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="shortcut icon" href="../img/img.ico" type="image/x-icon">
    <link rel="stylesheet" href="../css/Home.css">

    <title>Home</title>
</head>

<body>
    <header>
        <?php
        include './Hearder/Header.php';
        ?>
    </header>
    <main class="corpo-home">
        <section class="hidden">
            <h1>Bla3 Bla3 Bla3</h1>
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
        include './Footer/Footer.php';
        ?>
    </footer>
</body>

</html>