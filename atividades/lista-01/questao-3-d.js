function calcular_valor_total(valor_unitario_produto, qtd_pedida, desconto = 0) {


return valor_unitario_produto * qtd_pedida * (1 - desconto / 100);

}

const formQuestao3D = document.getElementById("form-questao-3-d");

formQuestao3D.addEventListener("submit", function(event) {


event.preventDefault();

const valor_unitario = Number(
    document.getElementById("preco-unitario").value
);

const qtd_pedida = Number(
    document.getElementById("quantidade-ordenada").value
);

const desconto = Number(
    document.getElementById("desconto").value
);

const resultado = document.getElementById("resultado-questao-3-d");

resultado.textContent =
    calcular_valor_total(valor_unitario, qtd_pedida, desconto);

});
