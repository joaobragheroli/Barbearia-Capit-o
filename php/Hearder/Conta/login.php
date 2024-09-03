<?php

require __DIR__ . '/PastaFirebase/vendor/autoload.php';
use Kreait\Firebase\Factory;

$factory = (new Factory())->withDatabaseUri('https://tcc-etec-d18fc-default-rtdb.asia-southeast1.firebasedatabase.app/');


$database = $factory->createDatabase();
$contatos = $database->getReference('Login')->getSnapshot();

// Se você está lidando com vários contatos, você pode querer pegar o primeiro ou fazer um loop
$firstContato = $contatos->getValue()[0]; // Ajuste conforme necessário

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
        <?php foreach ($contatos->getValue() as $contato): ?>
            <p>
                Email: <?php echo $contato['email'] ?> <br />
                Senha: <?php echo $contato['senha'] ?>
            </p>
        <?php endforeach; ?>
        
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