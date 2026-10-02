function converter_cotacao_dolares(qtd_dolares, valor_dolar = 5.22) {
    valor_convertido = qtd_dolares * valor_dolar
    return `U$ ${qtd_dolares} convertido dá: R$ ${valor_convertido.toFixed(2)}`;
}

console.log(converter_cotacao_dolares(10))