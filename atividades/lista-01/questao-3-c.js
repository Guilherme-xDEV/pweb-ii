function fatorial(n) {
    if (n == 1) return 1

    return (n * fatorial(n - 1));
}

console.log(fatorial(5))
console.log(fatorial(1))

const formQuestao3C = document.getElementById("form-questao-3-c");
formQuestao3C.addEventListener("submit", function(event) {

    event.preventDefault();

    const valor = document.getElementById("fatorial").value;
    const resultado = document.getElementById("resultado-questao-3-c");

    if (valor < 0) {
        resultado.textContent = "valor não pode ser negativo."
        return
    }

    resultado.textContent = fatorial(valor);
});