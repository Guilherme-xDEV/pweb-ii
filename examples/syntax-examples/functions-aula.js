setTimeout(function () {
    console.log('Executando callback');
}, 2000);

// observe que temos uma função sendo colocada como parâmetro de outra.
// em suma a sintaxe: setTimeout(function(){}, tempo);

setInterval(function () {
    console.log('Executando callback');
}, 2000);

// O setInterval chama a função a cada determinada quantidade de tempo.
// você pode definir uma nome para a funlção

// açucar sintático: á algo mais lexo do que funcional, não representa uma funcionalidade nova
// mas uma forma de escrever a mesma coisa.
// arrow function

setInterval(() => {
    console.log('Executando um callback')
}, 2000);

// se a função tem apenas uma linha de código: 
setInterval(() => console.log('Executando um callback'), 2000);

function tradicional() {
    console.log('')
}

const execucaoExpressao = function () { // expressão de função ou função anônima
    console.log('Executando um callback')
};

() => console.log('Executando um callback'); // arrow function

const execucaoArrow = () => console.log('Executando um callback');
// a vantagem de uma arrow function é não ter que criar uma função tradicinal

// exemplo:
const quadradoArrow = (x) => { return x * x };
// const quadradoArrow = (x) => x * x;

const calcularDesconto = (preco, desconto = 0.1) => preco * desconto;
// default parameter

console.log(calcularDesconto(200));
console.log(calcularDesconto(200, 0.2));

// rest parameters
//o recurso rest parameters (...) permite uma função tratar um número indefinido de argumentos como um array

// exemplo; uma função que retorna uma soma de n elementos.
const somatorio = (...numeros) => { // esse parâmetro é uma array
    let soma = 0;

    for (let n of numeros) {
        soma += n;
    }
    return soma;
}

somatorio();