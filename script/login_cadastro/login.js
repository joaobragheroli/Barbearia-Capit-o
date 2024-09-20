function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}

function onChangePassword() {
    toggleButtonsDisable();
    togglePasswordErrors();
}

function login() {
    firebase.auth().signInWithEmailAndPassword(form.email().value, form.password().value)
        .then(response => {
            window.location.href = "../..//html/Home.html";
        })
        .catch(error => {
            alert(getErrorMessage(error));
            // alert(error.code);
        });
}

function getErrorMessage(error) {
    console.log('Código de erro:', error.code);
    if (error.code === "auth/invalid-credential") {
        return "Usuário não encontrado ou Senha inválida !!!";
    }
    // if (error.code === "auth/invalid-credential") {
    //     return "";
    // }
    return error.message;
}

function recoverPassword() {
    firebase.auth().sendPasswordResetEmail(form.email().value)
        .then(() => {
            alert('Email enviado com sucesso');
        })
        .catch(error => {
            alert(getErrorMessage(error));
        });
}

function isEmailFields() {
    const email = form.email().value;
    return email && validateEmail(email);
}

function toggleEmailErrors() {
    const email = form.email().value;

    form.emailObrigatorio().style.display = email ? "none" : "block";
    form.emailInvalido().style.display = validateEmail(email) ? "none" : "block";
}

function togglePasswordErrors() {
    const password = form.password().value;

    form.senhaObrigatoria().style.display = password ? "none" : "block";
}

function toggleButtonsDisable() {
    const emailValid = isEmailFields();
    console.log('Email válido:', emailValid);
    form.recuperarSenha().disabled = !emailValid;

    const passwordValid = isPasswordFields();
    console.log('Senha válida:', passwordValid);
    form.btnEntrar().disabled = !emailValid || !passwordValid;
}

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

const form = {
    email: () => document.getElementById("email"),
    emailObrigatorio: () => document.getElementById("email-obrigatorio"),
    emailInvalido: () => document.getElementById("email-invalido"),
    password: () => document.getElementById("password"),
    senhaObrigatoria: () => document.getElementById("senha-Obrigatoria"),
    recuperarSenha: () => document.getElementById('recuperar-senha'),
    btnEntrar: () => document.getElementById("login-button")
}
