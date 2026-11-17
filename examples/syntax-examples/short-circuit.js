const produtos = [
    {nome: "Camisa", preco: 29.99},
    {nome: "Calça", preco: 49.99},
    {nome: "Tênis", preco: 89.99}
];

function exibirProdutos(produtos) {
    console.log(produtos);
}

// como 'produtos' possui item seu valor é 'truthy'
produtos && exibirProdutos(produtos);

const produto = null;

function exibirProduto() {
    console.log(produto);
}

const teste_false = produto && exibirProduto(produto);
console.log(produto && exibirProduto(produto));