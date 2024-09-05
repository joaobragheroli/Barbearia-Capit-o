<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- link SWIPER -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
    <!-- link Bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script defer src="https://unpkg.com/@phosphor-icons/web"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"> <!--tags que estão coledindo '~'-->
    <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <!--link Icone-->
    <link rel="shortcut icon" href="../img/img.ico" type="image/x-icon">
    <!-- link script -->
    <script defer src="../script/script.js"></script>
    <!--link CSS-->
    <link rel="stylesheet" href="../css/Servicos.css">

    <title>Serviços</title>
</head>

<body>
    <header>
        <?php
        include './Hearder/Header.php';
        ?>
    </header>

    <menu>
        <div class="corpo-carrosel">
            <!-- Carrosel -->
            <div class="conteiner-servicos">
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div class="carousel-inner" style="height: 30em;">
                        <div class="carousel-item h-100 active " style="background: url(../img/Cabelo\ e\ Barba.png) center/contain no-repeat;">

                        </div>
                        <div class="carousel-item h-100" style="background: url(../img/barba.png) center/contain no-repeat;">

                        </div>
                        <div class="carousel-item h-100" style="background: url(../img/Cabelo.png) center/contain no-repeat;">

                        </div>
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <!-- Carrosel Card -->
            <div class="conteiner swiper">
                <div class="slider-wrapper">
                    <div class="card-list swiper-wrapper">
                        <div class="card-item swiper-slide">
                            <a href="#primeira">
                                <img src="../img/barba.png" alt="" class="user-image"></a>
                                <h6>CORTE</h6>
                                <h1>R$ 35,00</h1>
                                <button class="explica-button">sobre</button> 
                        </div>
                        <div class="card-item swiper-slide">
                            <img src="../img/cabelo e barba.png" alt="" class="user-image">
                            <h6>BARBA</h6>
                            <h1>R$ 30,00</h1>
                            <button class="explica-button">sobre</button>
                        </div>
                        <div class="card-item swiper-slide">
                            <img src="../img/Cabelo.png" alt="" class="user-image">
                            <h6>CORTE + BARBA</h6>
                            <h1>R$ 60,00</h1>
                            <button class="explica-button">sobre</button>
                        </div>
                        <div class="card-item swiper-slide">
                            <img src="../img/cabelo e barba.png" alt="" class="user-image">
                            <h6>CORTE + SOBRANCELHA</h6>
                            <h1>R$ 40,00</h1>
                            <button class="explica-button">sobre</button>
                        </div>
                        <div class="card-item swiper-slide">
                            <img src="../img/barba.png" alt="" class="user-image">
                            <h6>CORTE+BARBA+SOBRANCELHA</h6>
                            <h1>R$ 70,00</h1>
                            <button class="explica-button">sobre</button>
                        </div>
                        <div class="card-item swiper-slide">
                            <img src="../img/Cabelo.png" alt="" class="user-image">
                            <h6>PÉZINHO</h6>
                            <h1>R$ 15,00</h1>
                            <button class="explica-button">sobre</button>
                        </div>
                        <div class="card-item swiper-slide">
                            <img src="../img/cabelo e barba.png" alt="" class="user-image">
                            <h6>HIDRATAÇÃO</h6>
                            <h1>R$ 30,00</h1>
                            <button class="explica-button">sobre</button>
                        </div>

                        <div class="card-item swiper-slide">
                            <img src="../img/Cabelo.png" alt="" class="user-image">
                            <h6>PLATINADO</h6>
                            <h1>R$ 100,00</h1>
                            <button class="explica-button">sobre</button>
                        </div>
                        <div class="card-item swiper-slide">
                            <img src="../img/cabelo e barba.png" alt="" class="user-image">
                            <h6>LUZES(consultar o barbeiro)</h6>
                            <h1>R$ 60,00</h1>
                            <button class="explica-button">sobre</button>
                        </div>
                        <div class="card-item swiper-slide">
                            <img src="../img/Cabelo.png" alt="" class="user-image">
                            <h6>PROGRESSIVA</h6>
                            <h1>R$ 60,00</h1>
                            <button class="explica-button">sobre</button>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>

                </div>
            </div>


            <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
            <script src="script.js"></script>
        </div>

        <!-- Pagina de Serviços oferecidos -->
        <div class="conteinerTD">


            <div class="ServicoEx">
                <div class="conteinerimg"><img src="../img/img.jpg" alt="" class="ImgServico"></div>

                <div class="Soferecidos">
                    <div class="tipo">
                        <h1 id="primeira">coisa1</h1>
                        <h1>coisa1</h1>
                        <h1>coisa1</h1>
                    </div>

                    <div class="tipo">
                        <h1>coisa2</h1>
                        <h1>coisa2</h1>
                        <h1>coisa2</h1>
                    </div>

                    <div class="tipo">
                        <h1>coisa3</h1>
                        <h1>coisa3</h1>
                        <h1>coisa3</h1>
                    </div>

                    <div class="tipo">
                        <h1>coisa4</h1>
                        <h1>coisa4</h1>
                        <h1>coisa4</h1>
                    </div>
                </div>
            </div>
        </div>

        <!-- Cards com os produtos Explicando -->
        <h1 class="nomesCard">Cortes</h1>
        <div class="conteinerCorte">
            <div class="itemC"></div>
            <div class="itemC"></div>
            <div class="itemC"></div>
            <div class="itemC"></div>
            <div class="itemC"></div>
            <div class="itemC"></div>
            <div class="itemC"></div>
            <div class="itemC"></div>
            <div class="itemC"></div>
        </div>

        <div class="conteinerSegunda ">
            
        </div>
    </menu>

    <footer>
        <?php
        include './Footer/Footer.php';
        ?>
    </footer>

</body>

</html>