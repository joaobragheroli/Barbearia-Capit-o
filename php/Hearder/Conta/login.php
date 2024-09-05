<?php

include ('conexao.php');

if (isset($_POST['email']) || isset($_POST['senha'])) {

    if (strlen($_POST['email']) == 0) {
        echo "Preencha seu e-mail";
    } else if (strlen($_POST['senha']) == 0) {
        echo "Preencha sua senha";
    } else {

        $email = $mysqli->real_escape_string($_POST['email']);
        $senha = $mysqli->real_escape_string($_POST['senha']);

        $sql_code = "SELECT * FROM usuarios WHERE email = '$email' AND senha = '$senha'";
        $sql_query = $mysqli->query($sql_code) or die("Falha na execução do código SQL: " . $mysqli->error);

        $quantidade = $sql_query->num_rows;

        if ($quantidade == 1) {

            $usuario = $sql_query->fetch_assoc();

            if (!isset($_SESSION)) {
                session_start();
            }

            $_SESSION['id'] = $usuario['id'];
            $_SESSION['nome'] = $usuario['nome'];

            header("Location: Home.php");

        } else {
            echo "Falha ao logar! E-mail ou senha incorretos";
        }

    }
}

?>

<DOCTYPE html>
    <html lang="pt-br">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="../img/img.ico" type="image/x-icon">
        <link rel="stylesheet" href="./css/login.css">
        <title>Login</title>
    </head>

    <body>

        <section id="section-login">
            <div class="img">
                <img src="./img/img.jpg" alt="" height="500px">
            </div>

            <div class="form-box">
                <div class="form-value">
                    <form action="">
                        <h2 class="h2-login">Login</h2>
                        <div class="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="email" required>
                            <label for="">Email</label>
                        </div>
                        <div class="inputbox">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input type="password" required>
                            <label for="">Senha</label>
                        </div>
                        <button>Entrar</button>
                        <div class="register">
                            <p>Você não tem uma conta?<a href="cadastro.php"> Cadastrar</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

    </body>

    </html>