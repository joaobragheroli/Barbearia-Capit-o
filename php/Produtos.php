<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../img/img.ico" type="image/x-icon">
    <link rel="stylesheet" href="../css/Produtos.css">
    <script src="https://kit.fontawesome.com/92d70a2fd8.js" crossorigin="anonymous"></script>
    <title>Loja barbeiro</title>
</head>

<body>

    <header>
        <?php
        // include './Hearder/Header.php';
        ?>
    </header>

    <div class="container scroll">
        <div id="root">

        </div>

        <div class="sidebar">
            <div class="head">
                <p>Carrinho</p>
                <div class="cart">
                <a href="https://web.whatsapp.com/send?phone=15 99849-0468" target="_blank">
                    <i class="fa-brands fa-square-whatsapp"></i>
                </a>
                <p id="count" >0</p>
                </div>
            </div>

            <div id="cartItem">Produtos</div>
            <div class="foot">
                <h3>Total</h3>
                <h2 id="total">R$ 0.00</h2>
            </div>
        </div>
    </div>
    <script src="../script/produtos.js"></script>
</body>

</html>