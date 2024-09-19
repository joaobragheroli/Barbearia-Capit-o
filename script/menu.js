const modal = document.querySelector(".modalgeral");
var btnAbrir = document.getElementById("mostrarModal");
var btnFechar = document.getElementById("fecharModal");

btnAbrir.addEventListener("click", exibirModal);
btnFechar.addEventListener("click", fecharModal);

function exibirModal() {
    modal.classList.toggle("aberto");
}
function fecharModal() {
    modal.classList.toggle("fechado");
}
