function produtorio(...valores) {
return valores.reduce((total, num) => total * num, 1);
}

const formQuestao3B = document.getElementById("form-questao-3-b");

formQuestao3B.addEventListener("submit", function(event) {


event.preventDefault();

const qtd = Number(
    document.getElementById("qtd-valores").value
);

const valores_obtidos = document.getElementById("produto").value;
const valores = valores_obtidos.split(",").map(Number);

if (valores.length !== qtd) {

    document.getElementById("resultado-questao-3-b").textContent =
        "A quantidade de números informada não corresponde aos números digitados.";

    return;
}

const resultado = produtorio(...valores);

document.getElementById("resultado-questao-3-b").textContent =
    `O produto dos números é: ${resultado}`;

});
