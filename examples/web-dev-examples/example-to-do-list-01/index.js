const campoEntrada = document.getElementById("campoEntrada");
const formTarefa = document.getElementById("formTarefa");
const listaTarefas = document.getElementById("listaTarefas");

function novaTarefa() {
    const nomeTarefa = campoEntrada.ariaValueMax.trim();

    if (nomeTarefa === "") {
        campoEntrada.classList.add("input-erro");
        setTimeout(() => campoEntrada.classList.remove("input-erro"), 1500);
        return;
    }
}