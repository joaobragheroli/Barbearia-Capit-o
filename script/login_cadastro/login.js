// Função chamada quando o e-mail é alterado
function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}

// Função chamada quando a senha é alterada
function onChangePassword() {
    toggleButtonsDisable();
    togglePasswordErrors();
}

// Função para realizar o login no Firebase
function login() {
    const email = form.email().value;
    const password = form.password().value;

    // Tenta fazer o login
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(response => {
            // Login bem-sucedido
            window.location.href = "../..//html/Home.html"; // Redireciona após login bem-sucedido
        })
        .catch(error => {
            // Tratar os diferentes erros
            handleLoginError(error);
        });
}

// Função que trata erros de login
function handleLoginError(error) {
    console.log('Código de erro:', error.code); // Exibe o código de erro no console

    // Limpa todas as mensagens de erro antes de exibir uma nova
    clearErrorMessages();

    switch (error.code) {
        case "auth/wrong-password":
            alert("Senha inválida! Verifique sua senha.");
            form.senhaObrigatoria().style.display = "block"; // Exibe mensagem de senha obrigatória
            break;
        case "auth/user-not-found":
            alert("Usuário não encontrado! Verifique o e-mail.");
            form.emailInvalido().style.display = "block"; // Exibe mensagem de e-mail inválido
            break;
        case "auth/invalid-email":
            alert("E-mail inválido! Verifique o formato do e-mail.");
            form.emailInvalido().style.display = "block"; // Exibe mensagem de e-mail inválido
            break;
        default:
            alert("Erro desconhecido. Tente novamente."); // Mensagem genérica para outros erros
            break;
    }
}

// Função para recuperação de senha
function recoverPassword() {
    const email = form.email().value;
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert('Email enviado com sucesso');
        })
        .catch(error => {
            alert(getErrorMessage(error));
        });
}

// Verifica se os campos de e-mail são válidos
function isEmailFields() {
    const email = form.email().value;
    return email && validateEmail(email);
}

// Exibe ou oculta erros de e-mail
function toggleEmailErrors() {
    const email = form.email().value;
    form.emailObrigatorio().style.display = email ? "none" : "block";
    form.emailInvalido().style.display = validateEmail(email) ? "none" : "block";
}

// Exibe ou oculta erros de senha
function togglePasswordErrors() {
    const password = form.password().value;
    form.senhaObrigatoria().style.display = password ? "none" : "block";
}

// Habilita ou desabilita os botões com base na validade dos campos
function toggleButtonsDisable() {
    const emailValid = isEmailFields();
    form.recuperarSenha().disabled = !emailValid;

    const passwordValid = isPasswordFields();
    form.btnEntrar().disabled = !emailValid || !passwordValid;
}

// Verifica se o campo de senha é válido
function isPasswordFields() {
    const password = form.password().value;
    return password ? true : false;
}

// Função de validação do e-mail (exemplo simples)
function validateEmail(email) {
    // Expressão regular para validar e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Limpa todas as mensagens de erro
function clearErrorMessages() {
    form.emailObrigatorio().style.display = "none"; // Limpa mensagem de e-mail obrigatório
    form.emailInvalido().style.display = "none";    // Limpa mensagem de e-mail inválido
    form.senhaObrigatoria().style.display = "none";  // Limpa mensagem de senha obrigatória
}

// Objeto que contém referências aos elementos do formulário
const form = {
    email: () => document.getElementById("email"),
    emailObrigatorio: () => document.getElementById("email-obrigatorio"),
    emailInvalido: () => document.getElementById("email-invalido"),
    password: () => document.getElementById("password"),
    senhaObrigatoria: () => document.getElementById("senha-Obrigatoria"),
    recuperarSenha: () => document.getElementById('recuperar-senha'),
    btnEntrar: () => document.getElementById("login-button")
};
