<?php

// require __DIR__ . '/PastaFirebase/vendor/autoload.php';
// use Kreait\Firebase\Factory;
// $msg = '';
// if(isset($_POST['id'])) {
    // $factory = (new Factory())->withDatabaseUri('https://tcc-etec-d18fc-default-rtdb.asia-southeast1.firebasedatabase.app/');
    // $database = $factory->createDatabase();
    // $novoContato = [
        // 'id'       => $_POST['id'],
        // 'email'    => $_POST['email'],
        // 'senha'    => $_POST['senha']
    // ];
// 
    // $database->getReference('contatos/' . $_POST['senha'])->set($novoContato);
// 
    // $msg = 'Contato adicionado com sucesso';
// }
// 
// 

?>

<DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="../img/img.ico" type="image/x-icon">
        <link rel="stylesheet" href="./css/cadastro.css">
        <title>Cadastro</title>
    </head>
    <body>

    <div class="conteiner">
        
            <section id="section-Cadastro">
                <div>
                    <img src="./img/img.jpg" alt="" height="500px">
                </div>

                <div class="form-box">
                    <div class="form-value">

                        <form action="post">
                            <h2 class="h2-cadastro">Cadastrar</h2>

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

                            <button type="submit">Cadastrar-se</button>

                            <div class="register">
                            <p>Já tem uma conta! <a href="login.php"> Login</a></p>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </section>
    </div>
        

        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

    </body>

    </html>