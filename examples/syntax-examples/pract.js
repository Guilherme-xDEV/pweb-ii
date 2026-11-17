console.log("2" * 2);
console.log("2" + 2);   // somente nesse caso concatena
console.log("2" - 2);
console.log("2" / 2)

console.log(2 + "2");   // converte a string para int

setTimeout(() => console.log("hi"), 1000);

const doubler = x => x * 2;
const root = x => Math.pow(x, 0.5);
console.log(doubler(2));
console.log(root(2));

// Object Literal
const person = {
    firstName: "John",
    lastName: "Do",
    age: 50,
    eyeColoe: "brown"
};

// Using the new Keyword
const me = new Object(
{
    myName: "gui",
    myAge: 14
})

console.log(me.myName);

// Use of Object.cretate It makes a copy
const you = Object.create(me);
me.myName = "Hai"

const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
];

const array = [1, 2, 3];

console.log(typeof fruits); // array is a type of object
console.log(typeof array);

for (let n of fruits) {
	console.log(n);
}

const estudante = {
    nome: "gus",
    idade: 27,
    notas: [10, 10, 10, 10],

    mostarInfo() {
        console.log(this.nome, this.idade);
    },

    calcularAnoNasc() {
        console.log(2026 - this.idade);
    },

    calcularMedia() {
        let soma_notas = this.notas.reduce((acumulador, valor_atual) => 
            acumulador + valor_atual, 0);

        console.log(`média: ${soma_notas/4}`);
    },

    testeArrowFunction(nome = "teste") {
        () => console.log(nome);
    }
}

estudante.mostarInfo();
estudante.calcularAnoNasc();
estudante.calcularMedia();
estudante.testeArrowFunction(); // não aparece


const animal = {

    nome: "",
    especie: "",
    reproducao: "",
    habitat: "",

    definirAnimal(nom, esp, rep, habi) {
        this.nome = nom,
        this.especie = esp,
        this.reproducao = rep,
        this.habitat = habi
    },

    informarAnimal() {
        console.log(`${this.nome}, ${this.especie}, ${this.reproducao}, ${this.habitat},`);
    }
}

animal.definirAnimal("gato", "felinus", "sexuada", "terrestre");
animal.informarAnimal();


// hoisting

console.log(funcao_hoisting(), typeof(funcao_hoisting())) // undefined

function funcao_hoisting() {
    return console.log();
};

console.log(x, typeof(x));
var x = 12;


temp = [14, 21, 12, 13]
const t = temp.map(x => x + 1);
console.log(t);

/*
O hoisting (ou "içamento") é o comportamento padrão do JavaScript que move as declarações de variáveis e funções para o topo do seu escopo durante a fase de compilação, antes da execução do código.  Isso permite que funções e variáveis sejam acessadas ou chamadas antes de suas declarações físicas no código. 

A forma como o hoisting afeta diferentes tipos de declarações varia:

Funções (function): São totalmente hoisted, incluindo o corpo da função, permitindo que sejam chamadas antes da definição. 
Variáveis (var): A declaração é hoisted, mas a inicialização (atribuição de valor) não.  O valor inicial é undefined.
Variáveis (let e const): São hoisted, mas entram em uma Zona Morta Temporal (TDZ).  Tentar acessá-las antes da declaração resulta em ReferenceError.
Expressões de Função: Comportam-se como variáveis; apenas a variável que armazena a função é hoisted, não a lógica da função. 
Em resumo, o JavaScript separa a declaração do registro da memória da inicialização do valor, o que explica por que o acesso prematuro a var retorna undefined, enquanto o acesso a let/const gera erro. 
*/