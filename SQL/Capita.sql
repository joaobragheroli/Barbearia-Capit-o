-- Deleta o Banco Capita se tiver
DROP DATABASE IF EXISTS Capita;

-- Criar o banco de dados
CREATE DATABASE Capita;

-- Selecionar o banco de dados
USE Capita;

-- Tabela Agendamento
CREATE TABLE Agendamento (
  id_agendamento INT PRIMARY KEY AUTO_INCREMENT,
  data VARCHAR(10),  
  hora VARCHAR(10), 
  funcionarioID INT,
  servicoID INT,
  usuarioID INT,
  FOREIGN KEY (funcionarioID) REFERENCES Funcionarios(id_funcionario),
  FOREIGN KEY (servicoID) REFERENCES Servicos(id_servico),
  FOREIGN KEY (usuarioID) REFERENCES Usuarios(id_usuario)
);

-- Tabela Avaliação
CREATE TABLE Avaliacao (
  id_avaliacao INT PRIMARY KEY AUTO_INCREMENT,
  dataCriacao TIMESTAMP,
  rating INT,
  servicoID INT,
  usuarioID INT,
  FOREIGN KEY (servicoID) REFERENCES Servicos(id_servico),
  FOREIGN KEY (usuarioID) REFERENCES Usuarios(id_usuario)
);

-- Tabela Funcionários
CREATE TABLE Funcionarios (
    id_funcionario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100)
);

-- Tabela Servicos
CREATE TABLE Servicos (
  id_servico INT PRIMARY KEY AUTO_INCREMENT,
  disponibilidade BOOLEAN,
  duracao INT,
  nome VARCHAR(100),
  preco DECIMAL(10, 2)
);

CREATE TABLE Usuarios (
  id_usuario INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  telefone VARCHAR(20),
  senha VARCHAR(255), 
  data_cadastro DATE
);

-- Inserindo dados na tabela Usuários
INSERT INTO Usuarios (nome, email, telefone, senha, data_cadastro) VALUES
('João Silva', 'joao.silva@email.com', '123456789', 'senha_secreta', '2024-10-01'),
('Maria Oliveira', 'maria.oliveira@email.com', '987654321', 'senha_secreta', '2024-10-02'),
('Carlos Santos', 'carlos.santos@email.com', '456123789', 'senha_secreta', '2024-10-03');

-- Inserindo dados na tabela Funcionários
INSERT INTO Funcionarios (nome) VALUES
('Sem Preferrencia'), 
('Lucas Ferreira'),
('Kennedy Esquitin');

-- Inserir serviços na tabela Servicos
INSERT INTO Servicos (disponibilidade, duracao, nome, preco) VALUES
    (TRUE, 30, 'Barba', 30.00),
    (TRUE, 60, 'Corte e Barba', 60.00),
    (TRUE, 40, 'Corte', 30.00),
    (TRUE, 60, 'Corte e Barba e Sobrancelha', 70.00),
    (TRUE, 35, 'Progressiva', 60.00),
    (TRUE, 20, 'Relaxamento', 35.00),
    (TRUE, 30, 'Luzes (Consultar o barbeiro)', 60.00),
    (TRUE, 30, 'Platinado (Consultar o barbeiro)', 100.00),
    (TRUE, 10, 'Pezinho', 15.00),
    (TRUE, 30, 'Hidratação', 30.00),
    (TRUE, 40, 'Corte e Sobrancelha', 40.00);

-- Inserindo dados na tabela Avaliação
INSERT INTO Avaliacao (dataCriacao, rating, servicoID, usuarioID) VALUES
('2024-10-01 14:22:07', 3, 1, 1), 
('2024-10-02 15:00:00', 5, 2, 2), 
('2024-10-03 16:30:00', 4, 1, 3); 
