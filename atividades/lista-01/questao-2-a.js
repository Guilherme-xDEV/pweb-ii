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