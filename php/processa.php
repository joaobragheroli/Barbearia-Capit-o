<?php

session_start(); // Iniciar a sessão

// Incluir o arquivo com a conexão com banco de dados
include_once './conexao_BD.php';

// Definir fuso horário de São Paulo
date_default_timezone_set('America/Sao_Paulo');

// Acessar o IF quando é selecionado ao menos uma estrela
if (!empty($_POST['estrela'])) {

}else{
     // Criar a mensagem de erro
     $_SESSION['msg'] = "<p style='color: #f00;'>Erro: Necessário selecionar pelo menos 1 estrela.</p>";

     // Redirecionar o usuário para a página inicial
    header("Location: Home.php");
}
