function operacoes(num1, num2, operacao) {

    if (operacao == "+") {
        return num1 + num2;

    } else if (operacao == "-") {
        return num1 - num2;

    } else if (operacao == "/") {
        return num1 / num2;

    } else if (operacao == "*") {
        return num1 * num2;

    } else {
        return ("inválido");
    }
}

const formQuestao3A = document.getElementById("form-questao-3-a");

formQuestao3A.addEventListener("submit", function(event) {

    event.preventDefault();

    const num1 = Number(
        document.getElementById("num1").value
    );

    const num2 = Number(
        document.getElementById("num2").value
    )

    const operacao = String(
        document.getElementById("operacao").value
    )

    const resultado = operacoes(num1, num2, operacao);
    document.getElementById("resultado-questao-3-a").textContent = resultado;
    
});