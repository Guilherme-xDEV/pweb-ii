let minVal;
let maxVal;
let contador_impares;

do {

    let objetivo = document.getElementById("objetivo");
    objetivo.textContent =
        "Esse programa simples soma os 5 primeiros ímpares de uma sequência.";

    minVal = Number(prompt("Informe o valor mínimo:"));
    maxVal = Number(prompt("Informe o valor máximo:"));

    let soma = 0;
    contador_impares = 0;

    for (let i = minVal; i <= maxVal && contador_impares < 5; i++) {

        if (i % 2 !== 0) {
            soma += i;
            contador_impares++;
        }
    }

    if (contador_impares < 5) {

        console.log(
            "Não há pelo menos 5 valores ímpares no intervalo. Tente novamente."
        );

        let erro = document.getElementById("erro");
        erro.textContent =
            "Não há pelo menos 5 valores ímpares no intervalo.";

    } else {

        console.log(soma);

        let resultado = document.getElementById("resultado");
        resultado.textContent = soma;
    }

} while (contador_impares < 5);


