function calcular_perimetro(raio) {
    return (2 * Math.PI * raio).toFixed(2);
}

console.log(calcular_perimetro(2))

const formQuestao2B = document.getElementById("form-questao-2-b");

formQuestao2B.addEventListener("submit", function(event) {

    event.preventDefault();

    const raio = Number(
        document.getElementById("questao-2-b").value
    );

    const resultado = calcular_perimetro(raio);

    document.getElementById("resultado-questao-2-b").textContent =
        `O perímetro é: ${resultado}`;
});