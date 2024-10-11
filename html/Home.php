<?php
    include '../SQL/conexao.php';  
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- links bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <!-- links icones das paginas -->
    <link rel="shortcut icon" href="../img/img.ico" type="image/x-icon">
    <script defer src="https://unpkg.com/@phosphor-icons/web"></script>
    <!-- link css -->
    <link rel="stylesheet" href="../css/Home.css">
    <!-- links script -->
    <script src="../script/menu.js" defer></script>
    <script defer src="../script/Home.js"></script>

    <title>Home</title>
</head>

<body>
    <header class="menu-desktop">

        <div class="conteiner-header">
            <div class="item">
                <img src="../img/img.jpg" alt="Barbearia" height="100px">
            </div>
            <div class="item">
                <nav class="menu">

                    <a href="../html/Home.php">Home</a>
                    <a href="../html/Produtos.html">Produtos</a>
                    <a href="../html/Servicos.html">Serviços</a>
                    <a href="../html/Agendamento.php">Agendamento</a>
                    <a href="../html/FullCalendar/index.html">Agendamento Funcionario</a>
                </nav>
            </div>


            <a href="./Contas/login.html">
                <butto class="button-login">Entrar</button>
            </a>

            <div id="user-initials" class="item" style="display: none;">
                <span id="initials"></span>
            </div>

        </div>


        <!-- header responsivo -->
        <div class="headerResp">
            <div class="modalResp">
                <button id="mostrarModal">
                    <i class="ph ph-list-plus"></i>
                </button>
            </div>
        </div>


        <div class="modalgeral">
            <div class="sabiduria">
                <a href="index.html">
                    <p class="paginasResponsi">Home</p>
                </a>
                <a href="depressao.html">
                    <p class="paginasResponsi">Produtos</p>
                </a>
                <a href="tdah.html">
                    <p class="paginasResponsi">Serviços</p>
                </a>
                <a href="tdah.html">
                    <p class="paginasResponsi">Agendamento</p>
                </a>
            </div>
            <div class="modalfechar">
                <a href="">
                    <button class="tan" id="fecharModal">Fechar</button>
                </a>
            </div>
    </header>

    <!-- Corpo de site -->
    <main class="corpo-home">

        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../img/Foto1.png" class="d-flex w-100 h-auto" alt="Slide 1">
                </div>
                <div class="carousel-item">
                    <img src="../img/Foto2.png" class="d-flex w-100 h-auto" alt="Slide 2">
                </div>
                <div class="carousel-item">
                    <img src="../img/Foto3.png" class="d-flex w-100 h-auto" alt="Slide 3">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>

           <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Próximo</span>
                </button>
            </div>
             
            
            
        </div>


        <section class="hidden segunda-section">
            <h2 id="Entrada2">O que oferecemos</h2>

            <p id="text2"> Na Barbearia Capitão, cada visita é uma oportunidade para renovar seu estilo com excelência.
                Nossos
                serviços incluem:</p>

            <p id="text3">
                <strong> Cortes de Cabelo:</strong> Desde o clássico ao moderno, nossos barbeiros são mestres em criar
                looks que
                destacam sua personalidade.
                </br>
                <strong>Cuidados com a Barba:</strong> Aprecie a arte da barbearia com nossas técnicas especializadas em
                aparagem,
                modelagem e tratamento de barba.
                </br>
                <strong>Experiência de Barbear Tradicional:</strong> Sinta o prazer de um barbear à moda antiga, com
                todo o cuidado e
                conforto que você merece.
                </br>
                <strong>Por Que Escolher a Barbearia Capitão?</strong>
                </br>
                <strong> Excelência e Profissionalismo:</strong> Nossa equipe é formada por profissionais apaixonados e
                altamente
                qualificados, dedicados a oferecer o melhor atendimento e resultados.
                </br>
                <strong>Ambiente Aconchegante:</strong> Criamos um espaço que mistura tradição e modernidade, onde cada
                visita é uma
                experiência relaxante e agradável.
                </br>
                <strong>Atendimento Personalizado:</strong> Valorizamos a individualidade de cada cliente e oferecemos
                um atendimento
                feito
                </br>
                sob medida para suas preferências e necessidades.
            </p>
        </section>
        <section class="hidden terceira-section">
            <img src="../img/ambiente.png" class="imagem-sombreada" alt="">
        </section>

    </main>

                <footer>
                    <div class="conteiner-footer">
                        <!-- icons -->
                        <div class="item">
                            <div class="page">
                                <div class="logo">
                                    <img src="../img/img.jpg" alt="Barbearia">
                                </div>

                                <div class="wrapper">
                                    <a href="#" class="button">
                                        <div class="icon">
                                            <i class="fab fa-facebook-f"></i>
                                        </div>
                                        <span>Facebook</span>
                                    </a>
                                    <a href="https://www.instagram.com/capitaobarbeiro/" class="button">
                                        <div class="icon">
                                            <i class="fab fa-instagram"></i>
                                        </div>
                                        <span>Instagram</span>
                                    </a>
                                    <a href="https://wa.me/5515997505420" class="button">
                                        <div class="icon">
                                            <i class="fab fa-whatsapp"></i>
                                        </div>
                                        <span>Whatsapp</span>
                                    </a>
                                </div>
                            </div>
                        </div>


                        <!-- Avaliação Serviços -->
                        <div class="app">
                            <h2>Avaliação</h2>
                            <div class="rating">
                                <div class="rating__average">
                                    <h1 id="average-rating">1.0</h1>
                                    <div class="star-outer">
                                        <div class="star-inner" id="star-rating">★★★★★</div>
                                    </div>
                                    <p id="total-reviews">0</p>
                                </div>
                                
                                <div class="rating__progress">
                                    <div class="rating__progress-value">
                                        <p>5 <span class="star">★</span></p>
                                        <div class="progress">
                                            <div class="bar" id="bar-5"></div>
                                        </div>
                                        <p id="reviews-5">0</p>
                                    </div>
                                    <div class="rating__progress-value">
                                        <p>4 <span class="star">★</span></p>
                                        <div class="progress">
                                            <div class="bar" id="bar-4"></div>
                                        </div>
                                        <p id="reviews-4">0</p>
                                    </div>
                                    <div class="rating__progress-value">
                                        <p>3 <span class="star">★</span></p>
                                        <div class="progress">
                                            <div class="bar" id="bar-3"></div>
                                        </div>
                                        <p id="reviews-3">0</p>
                                    </div>
                                    <div class="rating__progress-value">
                                        <p>2 <span class="star">★</span></p>
                                        <div class="progress">
                                            <div class="bar" id="bar-2"></div>
                                        </div>
                                        <p id="reviews-2">0</p>
                                    </div>
                                    <div class="rating__progress-value">
                                        <p>1 <span class="star">★</span></p>
                                        <div class="progress">
                                            <div class="bar" id="bar-1"></div>
                                        </div>
                                        <p id="reviews-1">0</p>
                                    </div>
                                </div>
                            </div>
                        
                            <!-- Avaliação por estrela -->
                            <div class="star-rating-input">
                                <p>Faça sua avaliação:</p>
                                <span class="star-input" data-value="1">&#9733;</span>
                                <span class="star-input" data-value="2">&#9733;</span>
                                <span class="star-input" data-value="3">&#9733;</span>
                                <span class="star-input" data-value="4">&#9733;</span>
                                <span class="star-input" data-value="5">&#9733;</span>
                            </div>
                        </div>
                        
                        <script src="../script/avaliacao.js"></script>
                        
                </footer>

                <!-- links do firebase
    <script src="https://www.gstatic.com/firebasejs/10.13.1/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.13.1/firebase-auth-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore-compat.js"></script>

    <script>
        // Configuração do Firebase
        const firebaseConfig = {
            apiKey: "AIzaSyChx2h9-1qFLPAaJvfYXayqSXojBX-BOWg",
            authDomain: "tcc-capita-5c9ec.firebaseapp.com",
            projectId: "tcc-capita-5c9ec",
            storageBucket: "tcc-capita-5c9ec.appspot.com",
            messagingSenderId: "939051844006",
            appId: "1:939051844006:web:696e50e93e43424edccf67"
        };

        // Inicializa o Firebase
        firebase.initializeApp(firebaseConfig);
        const db = firebase.firestore(); // Inicializa o Firestore

        // Variáveis para armazenar o ID do usuário e do barbeiro
        const userId = "usuario123"; // ID do usuário
        const barberId = "barbeiro456"; // ID do barbeiro

        // Função para adicionar uma avaliação
        async function addRating(userId, barberId, rating) {
            try {
                await db.collection('ratings').add({
                    userId: userId,
                    barberId: barberId,
                    rating: rating,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp() // Armazena o tempo da avaliação
                });
                console.log("Avaliação adicionada com sucesso!");
                calculateAverageRating(barberId); // Recalcula a média após enviar a avaliação
            } catch (error) {
                console.error("Erro ao adicionar avaliação:", error);
            }
        }

        // Função para obter as avaliações de um barbeiro
        async function getRatings(barberId) {
            try {
                const ratingsSnapshot = await db.collection('ratings')
                    .where('barberId', '==', barberId)
                    .get();

                if (ratingsSnapshot.empty) {
                    console.log("Nenhuma avaliação encontrada.");
                    return [];
                }

                const ratings = [];
                ratingsSnapshot.forEach(doc => {
                    ratings.push(doc.data());
                });
                return ratings;
            } catch (error) {
                console.error("Erro ao buscar avaliações:", error);
            }
        }

        // Função para calcular a média das avaliações de um barbeiro
        async function calculateAverageRating(barberId) {
            const ratings = await getRatings(barberId);
            if (ratings.length === 0) {
                document.getElementById("average-rating-value").innerText = "0";
                return;
            }

            let totalRating = 0;
            ratings.forEach(rating => {
                totalRating += rating.rating;
            });

            const average = totalRating / ratings.length;
            document.getElementById("average-rating-value").innerText = average.toFixed(2);
        }

        // Atualiza o valor da avaliação quando uma estrela é clicada
        document.querySelectorAll('.star').forEach(star => {
            star.addEventListener('click', function () {
                const ratingValue = this.getAttribute('data-value');
                document.getElementById('rating-value').innerText = ratingValue;
                // Adiciona classe ativa às estrelas selecionadas
                document.querySelectorAll('.star').forEach(s => {
                    s.style.color = s.getAttribute('data-value') <= ratingValue ? 'gold' : 'lightgray';
                });
            });
        });

        // Adiciona a avaliação ao clicar no botão "Enviar Avaliação"
        document.getElementById('submit-rating').addEventListener('click', function () {
            const ratingValue = document.getElementById('rating-value').innerText;
            if (ratingValue > 0) {
                addRating(userId, barberId, parseInt(ratingValue));
                document.getElementById('rating-value').innerText = '0'; // Reseta o valor exibido
                document.querySelectorAll('.star').forEach(s => s.style.color = 'lightgray'); // Reseta as estrelas
            } else {
                alert("Por favor, selecione uma avaliação antes de enviar.");
            }
        });

        // Calcula e exibe a média das avaliações do barbeiro ao carregar a página
        calculateAverageRating(barberId);
    </script> -->

</body>

</html>