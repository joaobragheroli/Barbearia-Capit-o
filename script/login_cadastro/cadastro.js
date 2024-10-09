// Objeto que contém referências aos elementos do formulário
const form = {
    confirmPassword: () => document.getElementById('confirmPassword'),
    confirmPasswordDoesntMatchError: () => document.getElementById('confirm-password-doesnt-match-error'),
    email: () => document.getElementById('email'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    password: () => document.getElementById('password'),
    passwordMinLengthError: () => document.getElementById('password-min-length-error'),
    passwordRequiredError: () => document.getElementById('password-required-error'),
    registerButton: () => document.getElementById('register-button'),
    nome: () => document.getElementById('nome'),
    nomeRequiredError: () => document.getElementById('nome-required-error'),
    telefone: () => document.getElementById('telefone'),
    telefoneRequiredError: () => document.getElementById('telefone-required-error'),
};

// Função chamada quando o e-mail é alterado
function onChangeEmail() {
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";

    toggleRegisterButtonDisable();
}

// Função chamada quando a senha é alterada
function onChangePassword() {
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block";
    form.passwordMinLengthError().style.display = password.length >= 6 ? "none" : "block";

    validatePasswordsMatch();
    toggleRegisterButtonDisable();
}

// Função chamada quando a confirmação da senha é alterada
function onChangeConfirmPassword() {
    validatePasswordsMatch();
    toggleRegisterButtonDisable();
}

// Função chamada quando o nome é alterado
function onChangeNome() {
    const nome = form.nome().value;
    form.nomeRequiredError().style.display = nome ? "none" : "block";
    toggleRegisterButtonDisable();
}

// Função chamada quando o telefone é alterado
function onChangeTelefone() {
    const telefone = form.telefone().value;
    form.telefoneRequiredError().style.display = telefone ? "none" : "block";
    toggleRegisterButtonDisable();
}

// Função de mandar o Registro para Firebase
async function register(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const email = form.email().value;
    const password = form.password().value;
    const nome = form.nome().value;
    const telefone = form.telefone().value;

    // Desabilita o botão de registro para evitar múltiplos cliques
    form.registerButton().disabled = true;

    try {
        // Criar um novo usuário com email e senha
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        // Armazenar dados do usuário no Firestore na coleção "Usuarios"
        await db.collection("Usuarios").doc(user.uid).set({
            email: email,
            nome: nome,
            telefone: telefone
        });
        alert("Usuário cadastrado com sucesso!");
    } finally {
        // Habilita o botão de registro após a operação
        form.registerButton().disabled = false;
    }
}

// Função de mudar a mensagem de erro
function getErrorMessage(error) {
    switch (error.code) {
        case "auth/email-already-in-use":
            return "O e-mail já está em uso. Tente outro.";
        case "auth/invalid-email":
            return "O e-mail fornecido é inválido.";
        case "auth/operation-not-allowed":
            return "A operação não é permitida.";
        case "auth/weak-password":
            return "A senha deve ter pelo menos 6 caracteres.";
        default:
            return "Erro ao cadastrar usuário: " + error.message;
    }
}

// Valida se as senhas coincidem
function validatePasswordsMatch() {
    const password = form.password().value;
    const confirmPassword = form.confirmPassword().value;

    form.confirmPasswordDoesntMatchError().style.display = password === confirmPassword ? "none" : "block";
}

// Habilita ou desabilita o botão de registro com base na validade do formulário
function toggleRegisterButtonDisable() {
    form.registerButton().disabled = !isFormValid();
}

// Valida todos os campos do formulário
function isFormValid() {
    const email = form.email().value;
    const nome = form.nome().value;
    const telefone = form.telefone().value;

    if (!email || !validateEmail(email)) {
        return false; // E-mail é inválido
    }

    const password = form.password().value;
    if (!password || password.length < 6) {
        return false; // Senha é inválida
    }

    const confirmPassword = form.confirmPassword().value;
    if (password !== confirmPassword) {
        return false; // As senhas não coincidem
    }

    if (!nome) {
        return false; // Nome é obrigatório
    }

    if (!telefone) {
        return false; // Telefone é obrigatório
    }

    return true;
}

// Função de validação do e-mail (exemplo simples)
function validateEmail(email) {
    // Expressão regular para validar e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa as referências do objeto form
    // Carrega as referências dos elementos do formulário
    Object.keys(form).forEach(key => {
        if (typeof form[key] === 'function') {
            form[key](); // Atualiza as referências
        }
    });

    // Listener de submissão de formulário
    document.getElementById('register-form').addEventListener('submit', register);

    // Adiciona eventos onchange para validar os campos
    form.email().addEventListener('change', onChangeEmail);
    form.password().addEventListener('change', onChangePassword);
    form.confirmPassword().addEventListener('change', onChangeConfirmPassword);
    form.nome().addEventListener('change', onChangeNome);
    form.telefone().addEventListener('change', onChangeTelefone);
});
