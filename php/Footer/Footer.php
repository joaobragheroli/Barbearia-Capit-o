<!-- <link rel="stylesheet" href="../css/Home.css"> --> <!-- não sei pq linkaram o css Home -->
<div class="conteiner-footer">
    <!-- icons -->
    <div class="item">
        <div class="page">
            <div class="logo">
                <img src="../img/img.jpg" alt="Barbearia">
            </div>

            <div class="box">
                <!-- Tentei criar outras div para retirar o efeito do boodstrap (icons,separarBood) -->
                <div class="icons">
                    <div class="separarBood">
                        <a href="https://www.instagram.com/capitaobarbeiro/" class="btn instagran">
                            <div class="icon">
                                <i class="fab fa-instagram"></i>
                            </div>
                            <span>Instagran</span>
                        </a>
                        <a href="#" class="btn facebook">
                            <div class="icon">
                                <i class="fab fa-facebook"></i>
                            </div>
                            <span>Facebook</span>
                        </a>
                        <a href="https://web.whatsapp.com/send?phone=15 99849-0468" target="_blank"
                            class="btn WhatsApp">
                            <div class="icon">
                                <i class="ph ph-whatsapp-logo"></i>
                            </div>
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- Caixa de Comentarios -->
    <div id="comentarios">
        <h2>Avaliação</h2>

        <?php
        // Imprimir a mensagem de erro ou sucesso salvo na sessão
        if (isset($_SESSION['msg'])) {
            echo $_SESSION['msg'];
            unset($_SESSION['msg']);
        }
        ?>

        <form action="#" method="post" id="avaliacaoTotal">
            <div class="estrelas">

                <input type="radio" name="estrela" id="vazio" value="" checked>

                <label for="estrela_um"><i class="opcao fa"></i></label>
                <input type="radio" name="estrela" id="estrela_um" id="vazio" value="1">

                <label for="estrela_dois"><i class="opcao fa"></i></label>
                <input type="radio" name="estrela" id="estrela_dois" id="vazio" value="2">

                <label for="estrela_tres"><i class="opcao fa"></i></label>
                <input type="radio" name="estrela" id="estrela_tres" id="vazio" value="3">

                <label for="estrela_quatro"><i class="opcao fa"></i></label>
                <input type="radio" name="estrela" id="estrela_quatro" id="vazio" value="4">

                <label for="estrela_cinco"><i class="opcao fa"></i></label>
                <input type="radio" name="estrela" id="estrela_cinco" id="vazio" value="5"><br><br>

                <textarea name="mensagem" id="" cols="20" rows="4" placeholder="Deixe seu comentario"></textarea>
                <input id="btn-enviar" type="button" value="Enviar"><br><br>

            </div>
        </form>
    </div>
</div>