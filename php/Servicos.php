<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
    <title>Bootstrap Example</title>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Ver as tags que estão coledindo '~' -->
    <!-- <link rel="stylesheet" href="../css/style.css"> -->
</head>

<body style="background-color: rgb(77, 64, 64);">
    <header>
        <?php
        include './Header.php';
        ?>
    </header>

    <!-- Carrosel -->
    <!-- style="width: 50%; display " ver se funciona o displat:"flex" no conteiner  -->
    <div class="conteiner">
        <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>

            <div class="carousel-inner" style="height: 30em;">
                <div class="carousel-item h-100 active "
                    style="background: url(../img/Cabelo\ e\ Barba.png) center/contain no-repeat;">

                </div>
                <div class="carousel-item h-100" style="background: url(../img/barba.png) center/contain no-repeat;">

                </div>
                <div class="carousel-item h-100" style="background: url(../img/Cabelo.png) center/contain no-repeat;">

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

    <footer>
        <?php
            include './Footer.php';
        ?>
    </footer>
</body>
</html>