console.log("Script externo")

let elTitulo = document.getElementById("titulo");
setTimeout(() => elTitulo.textContent = "Aula de PWEB 2", 2000);

let nome = prompt("informe nome")

setTimeout(() => elTitulo.textContent = `Olá, ${nome}`, 2000);

function ValidarIdade(idade) {
    if (idade < 18) {
        console.log("menor de idade");
    } else if (idade > 18) {
        console.log("adulto")
    }
}

const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota";
cars.push("Audi");

/*
1. JavaScript statements: são declarações de instruções, podem ser compostas de
valores, operadores, expressões, palavras reservadas e comentários.

2. O ponto e vírgula separa as instruções. 
*/