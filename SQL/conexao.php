<?php
	$host = "localhost";
	$usuario = "root";
	$senha = "";
	$database = "Capita";

	// Cria a conexão
	$connection = new mysqli($host, $usuario, $senha, $database);
	
	// Checa se a conexão foi realizada com sucesso
	if ($connection->connect_error) {
	    die("Falha de conexão: " . $connection->connect_error);
	}
?>