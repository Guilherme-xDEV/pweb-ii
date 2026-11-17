function sayHello() { return "Hello World! "}

let message = sayHello();


function multiply(a, b) {
    return a * b;
}

function add(a, b) {
    return a + b;
}

function multiplas_operacoes(...numeros) {
    return numeros.reduce((total, numero) => total + numero, 0);
}

console.log(multiplas_operacoes(1, 2));
console.log(multiplas_operacoes(10, 20, 30));
console.log(multiplas_operacoes(2.5, 3.7, 1))

function quadrado(numero) {
    return numero * numero
}

console.log(quadrado(5));
console.log(quadrado(2.5))

// javascript é dinamicamente tipado, logo não é necessário declarar T ou number na assinatura para
// criar um método genérico. Na verdade, não há generics como emm java, c++, kotlin, etc.

// CUIDADO! algo como 'dobrar("5")' retornaria "55".
// validação explicita se torna necessária:

function dobrar(numero) {
    if (typeof numero !== "number") {
        throw new TypeError("O argumento deve ser um número");
    }

    return numero * 2;
}

console.log(dobrar(11))