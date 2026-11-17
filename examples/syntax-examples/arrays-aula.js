// Array / Vetor em JS

// É um TAD, tipo abstrato de dados

const carrinho_ = {

    itens: [
        { nome: "Teclado", preco: 250 },
        { nome: "Mouse", preco: 80 }
    ],

    exibirItens() {
        this.itens.forEach(item => {
            console.log(`${item.nome}: R$ ${item.preco}`);
        });
    }
};

console.log("\nTipos de dados")
console.log(typeof carrinho_)             // object
console.log(typeof carrinho_.itens)       // object
console.log(typeof carrinho_.exibirItens) // function

// Sobre tipos primitivos e objetos:
// Tipo primitivo é imutável
// O valor de um tipo primitivo não pode ser alterado diretamente
// Os tipos primitivos são 7: String, Number, BigInt, Boolean, Symbol, null e undefined

// Ao tentar modificar um primitivo (como uma string ou número),
// o JavaScript não altera o valor original na memória; em vez disso, 
// ele cria um novo valor e a variável passa a apontar para esse novo endereço. 
// Isso contrasta com os objetos (arrays, funções, objetos literais), que são mutáveis e podem ser alterados diretamente após sua criação.

// Métodos de Array:
// .pop()               remove o último elemento de uma array e também retorna esse valor.
// .push(val)           adiciona um elemento especificado no final da array.
// .shift(val)          remove o primeiro elemento da array e decrementa em 1 os índices dos valores restantes.
// .unshift(val)        adiciona um elemento específico no início da array. Precisa realocar os outros índices.
// .concat(arr1, arr2)  método útil para juntar duas array, concatenação.
// .slice(start, end)   método útil para 'cortar' uma array, permite criar uma 'subarry'.
// .splice(i, r, val)   método versátil que permite adicionar e remover elementos em índice especificado. 

// shift e unshift realizam operações custosas em relação à métodos que adicionam ou removem no final
// eles precisam fazer uma reindexação, deslocando todos para a esquerda O(n) vs O(1).



const carros = ["Torro", "HB20", "Corolla", "Mercedes Benz"];

console.log("\n");
console.log("Antes do pop: " + carros);
console.log("O valor retornado pelo pop: " + carros.pop());
console.log("Depois do pop: " + carros);

console.log("\nAntes do push: " + carros);
carros.push("Cadilac");
console.log("Depois do push: " + carros);

console.log("\nAntes do shift: " + carros);
carros.shift();
console.log("Antes do shift: " + carros);

console.log("\nAntes do unshift: " + carros);
carros.unshift("Carro2");
console.log("\nDepois do unshift: " + carros);

console.log("\nExemplo de slice: " + carros.slice(0, 3)); // último elemento não entra

console.log("\n");



const frutas = ["Banana", "Orange", "Apple", "Mango"];

console.log("array formada: " + frutas.slice(1, 3));

// Método Splice:
// splice(indice, qtd_remover, elementos_inserir)

const removidos = frutas.splice(2, 1, "Lemon", "Kiwi"); // remover 1 elemento no índice 2 e adicionar "Lemon" e "Kiwi"

console.log(frutas);        // ["Banana", "Orange", "Lemon", "Kiwi", "Mango"]
console.log(removidos);     // ["Apple"]   



const numeros = [1,2,3,4,5,6,7,8,9,10];
numeros.splice(4, 1, 6);    // deve remover o elemento 5 e adicionar 6 no índice 4

console.log("\nExemplo em array: " + numeros);

numeros.splice(0, 0, 0);   // adicionando 0 na posição 0
console.log("adição de zero " + numeros);


// método de iteração
console.log("\nExemplo de forEach")
frutas.forEach((elemento) => {
    console.log(elemento);
});