function calcular_nota_final(nota_n1, nota_n2) {

    const nota_final = ((nota_n1 * 2) + (nota_n2 * 3)) / 5;

    if (nota_final >= 7) {
        return `Aprovado com ${nota_final.toFixed(2)}`;
    } else {
        return `Reprovado com ${nota_final.toFixed(2)}`;
    }
}

const formQuestao2C = document.getElementById("form-questao-2-c");

formQuestao2C.addEventListener("submit", function(event) {

    event.preventDefault();

    const notaN1 = Number(
        document.getElementById("questao-2-c-1").value
    );

    const notaN2 = Number(
        document.getElementById("questao-2-c-2").value
    );

    const resultado = calcular_nota_final(notaN1, notaN2);

    document.getElementById("resultado-questao-2-c").textContent =
        resultado;
});