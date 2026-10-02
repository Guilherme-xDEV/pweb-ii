function converter_cotacao_reais(qtd_reais, valor_dolar = 5.22) {
    valor_convertido = qtd_reais / valor_dolar
    return `R$ ${qtd_reais} convertido dá: U$ ${valor_convertido.toFixed(2)}`;
}

console.log(converter_cotacao_reais(10))

// extra
function converter_cotacao_dolares(qtd_dolares, valor_dolar = 5.22) {
    valor_convertido = qtd_dolares * valor_dolar
    return `U$ ${qtd_dolares} convertido dá: R$ ${valor_convertido.toFixed(2)}`;
}

console.log(converter_cotacao_dolares(10))

const formQuestao2A = document.getElementById("form-questao-2-a");

formQuestao2A.addEventListener("submit", function(event) {

    event.preventDefault();

    const qtdReais = Number(
        document.getElementById("questao-2-a").value
    );

    const resultado = converter_cotacao_reais(qtdReais);

    document.getElementById("resultado-questao-2-a").textContent = resultado;
});