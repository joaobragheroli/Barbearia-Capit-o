<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script defer src="https://unpkg.com/@phosphor-icons/web"></script>
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"> tags que estão coledindo '~' -->
    <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="shortcut icon" href="../img/img.ico" type="image/x-icon">
    <link rel="stylesheet" href="../css/Servicos.css">

    <title>Serviços</title>
</head>

<body >
    <header>
        <?php
        include './Hearder/Header.php';
        ?>
    </header>

    <main class="corpo-servicos">
        <!-- Carrosel -->
        <div class="conteiner-servicos">
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>

                <div class="carousel-inner" style="height: 30em;">
                    <div class="carousel-item h-100 active "
                        style="background: url(../img/Cabelo\ e\ Barba.png) center/contain no-repeat;">

                    </div>
                    <div class="carousel-item h-100"
                        style="background: url(../img/barba.png) center/contain no-repeat;">

                    </div>
                    <div class="carousel-item h-100"
                        style="background: url(../img/Cabelo.png) center/contain no-repeat;">

                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </main>
    <footer>
        <?php
        include './Footer/Footer.php';
        ?>
    </footer>

</body>
</html>