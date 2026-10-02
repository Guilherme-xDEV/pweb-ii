function validacao_primo(numero) {

    if (numero < 2) {
        return false;
    }

    for (let i = 2; i < Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(validacao_primo(11))

function soma_primos(numeros) {
    let soma = 0;

    for (let numero of numeros) {
        if (validacao_primo(numero)) {
            soma += numero;
        }
    }

    return soma;
}

let numeros = [2, 3, 5, 7, 10, 11];

console.log(soma_primos(numeros))

const formQuestao2D = document.getElementById("form-questao-2-d");

formQuestao2D.addEventListener("submit", function(event) {

    event.preventDefault();

    const quantidade = Number(
        document.getElementById("quantidade-numeros").value
    );

    const entrada = document.getElementById("numeros").value;

    const numeros = entrada.split(",").map(Number);

    if (numeros.length !== quantidade) {

        document.getElementById("resultado-questao-2-d").textContent =
            "A quantidade de números informada não corresponde aos números digitados.";

        return;
    }

    const resultado = soma_primos(numeros);

    document.getElementById("resultado-questao-2-d").textContent =
        `A soma dos números primos é: ${resultado}`;
});