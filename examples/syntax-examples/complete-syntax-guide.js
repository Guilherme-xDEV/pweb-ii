// ============================================================
//  GUIA COMPLETO DE JAVASCRIPT — SINTAXE E CONCEITOS
//  Arquivo de referência com exemplos comentados
// ============================================================




// ============================================================
// 1. VARIÁVEIS
// ============================================================

// var — escopo de função, evite usar (forma antiga)
var nome = "Maria";

// let — escopo de bloco, valor pode mudar
let idade = 25;

// const — escopo de bloco, valor NÃO pode ser reatribuído
const PI = 3.14159;

idade = 26;       // ✅ válido — let permite reatribuição
// PI = 3;        // ❌ erro — const não permite reatribuição




// ============================================================
// 2. TIPOS DE DADOS PRIMITIVOS
// ============================================================

let texto      = "Olá, mundo!";   // string
let numero     = 42;              // number (inteiro)
let decimal    = 3.14;            // number (float)
let booleano   = true;            // boolean (true ou false)
let nulo       = null;            // null — ausência intencional de valor
let indefinido = undefined;       // undefined — variável declarada mas sem valor
let simbolo    = Symbol("id");    // symbol — identificador único
let grande     = 9007199254740991n; // bigint — número inteiro muito grande

// typeof — descobre o tipo de uma variável
console.log(typeof texto);    // "string"
console.log(typeof numero);   // "number"
console.log(typeof booleano); // "boolean"




// ============================================================
// 3. STRINGS — TEXTOS
// ============================================================

let saudacao = "Olá";
let sobrenome = 'Silva';

// Template literals (crase) — permite interpolação e múltiplas linhas
let frase = `Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos.`;

// Métodos úteis de string
console.log(frase.length);             // comprimento
console.log(frase.toUpperCase());      // MAIÚSCULAS
console.log(frase.toLowerCase());      // minúsculas
console.log(frase.includes("Maria")); // verifica se contém
console.log(frase.indexOf("Silva"));  // posição da substring
console.log(frase.slice(0, 5));       // recorta parte da string
console.log(frase.replace("Maria", "João")); // substitui
console.log("  espaço  ".trim());     // remove espaços nas bordas
console.log("a,b,c".split(","));      // divide em array: ["a","b","c"]




// ============================================================
// 4. NÚMEROS E MATH
// ============================================================

console.log(10 + 3);   // 13  — soma
console.log(10 - 3);   // 7   — subtração
console.log(10 * 3);   // 30  — multiplicação
console.log(10 / 3);   // 3.3 — divisão
console.log(10 % 3);   // 1   — resto da divisão (módulo)
console.log(10 ** 2);  // 100 — potência (10²)

// Objeto Math — funções matemáticas
console.log(Math.round(4.7));   // 5  — arredonda
console.log(Math.floor(4.9));   // 4  — arredonda para baixo
console.log(Math.ceil(4.1));    // 5  — arredonda para cima
console.log(Math.abs(-10));     // 10 — valor absoluto
console.log(Math.max(1, 5, 3)); // 5  — maior valor
console.log(Math.min(1, 5, 3)); // 1  — menor valor
console.log(Math.random());     // número aleatório entre 0 e 1
console.log(Math.sqrt(16));     // 4  — raiz quadrada

// Conversão de tipos
console.log(Number("42"));      // string → número: 42
console.log(String(42));        // número → string: "42"
console.log(parseInt("10.9")); // string → inteiro: 10
console.log(parseFloat("3.14")); // string → decimal: 3.14
console.log(isNaN("abc"));     // verifica se NÃO é número: true




// ============================================================
// 5. OPERADORES DE COMPARAÇÃO E LÓGICOS
// ============================================================

// Comparação
console.log(5 == "5");   // true  — igual (com conversão de tipo)
console.log(5 === "5");  // false — estritamente igual (sem conversão)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true  — estritamente diferente
console.log(5 > 3);      // true
console.log(5 >= 5);     // true
console.log(3 < 5);      // true
console.log(3 <= 2);     // false

// Lógicos
console.log(true && false); // false — E (AND)
console.log(true || false); // true  — OU (OR)
console.log(!true);         // false — NÃO (NOT)

// Nullish coalescing — retorna o lado direito se o esquerdo for null/undefined
let valor = null ?? "padrão"; // "padrão"

// Optional chaining — acessa propriedade sem erro se o objeto for null
let usuario = null;
console.log(usuario?.nome); // undefined (sem lançar erro)




// ============================================================
// 6. ESTRUTURAS CONDICIONAIS
// ============================================================

// if / else if / else
let hora = 14;

if (hora < 12) {
  console.log("Bom dia!");
} else if (hora < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}

// Operador ternário — if/else em uma linha
let acesso = idade >= 18 ? "Permitido" : "Negado";

// switch — compara um valor com vários casos
let diaSemana = 2;
switch (diaSemana) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  default:
    console.log("Outro dia");
}




// ============================================================
// 7. LAÇOS DE REPETIÇÃO (LOOPS)
// ============================================================

// for — quando se sabe o número de iterações
for (let i = 0; i < 5; i++) {
  console.log("Iteração:", i); // 0, 1, 2, 3, 4
}

// while — repete enquanto a condição for verdadeira
let contador = 0;
while (contador < 3) {
  console.log("contador:", contador);
  contador++;
}

// do...while — executa ao menos uma vez, depois verifica
let x = 0;
do {
  console.log("x:", x);
  x++;
} while (x < 2);

// for...of — itera sobre valores de um iterável (array, string...)
const frutas = ["maçã", "banana", "laranja"];
for (const fruta of frutas) {
  console.log(fruta);
}

// for...in — itera sobre as chaves de um objeto
const pessoa = { nome: "João", idade: 30 };
for (const chave in pessoa) {
  console.log(chave, ":", pessoa[chave]);
}

// break — encerra o loop
// continue — pula para a próxima iteração
for (let i = 0; i < 10; i++) {
  if (i === 3) continue; // pula o 3
  if (i === 6) break;    // para no 6
  console.log(i);        // 0, 1, 2, 4, 5
}




// ============================================================
// 8. FUNÇÕES
// ============================================================

// Declaração de função (hoisting — pode ser chamada antes da declaração)
function somar(a, b) {
  return a + b;
}
console.log(somar(3, 4)); // 7

// Expressão de função
const subtrair = function(a, b) {
  return a - b;
};

// Arrow function — sintaxe curta (ES6+)
const multiplicar = (a, b) => a * b;

// Arrow function com corpo de bloco
const dividir = (a, b) => {
  if (b === 0) return "Erro: divisão por zero";
  return a / b;
};

// Parâmetros padrão
function cumprimentar(nome = "visitante") {
  return `Olá, ${nome}!`;
}
console.log(cumprimentar());        // "Olá, visitante!"
console.log(cumprimentar("Ana"));   // "Olá, Ana!"

// Rest parameters — agrupa argumentos em um array
function somarTodos(...numeros) {
  return numeros.reduce((total, n) => total + n, 0);
}
console.log(somarTodos(1, 2, 3, 4)); // 10

// Funções de ordem superior — recebem ou retornam funções
function executar(fn, valor) {
  return fn(valor);
}
console.log(executar(n => n * 2, 5)); // 10

// Closure — função que lembra o escopo em que foi criada
function criarContador() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const contar = criarContador();
console.log(contar()); // 1
console.log(contar()); // 2




// ============================================================
// 9. ARRAYS
// ============================================================

const numeros = [10, 20, 30, 40, 50];

// Acesso por índice (começa em 0)
console.log(numeros[0]); // 10
console.log(numeros[numeros.length - 1]); // 50 (último elemento)

// Métodos de mutação (alteram o array original)
numeros.push(60);      // adiciona ao final
numeros.pop();         // remove do final
numeros.unshift(0);    // adiciona no início
numeros.shift();       // remove do início
numeros.splice(1, 2);  // remove 2 elementos a partir do índice 1

// Métodos funcionais (retornam novo array ou valor)
const dobrados = numeros.map(n => n * 2);          // transforma cada item
const pares    = numeros.filter(n => n % 2 === 0); // filtra itens
const soma     = numeros.reduce((acc, n) => acc + n, 0); // acumula
const achouAlgum = numeros.some(n => n > 30);      // algum satisfaz?
const todosOk    = numeros.every(n => n > 0);      // todos satisfazem?
const encontrado = numeros.find(n => n > 20);      // primeiro que satisfaz
const indice     = numeros.findIndex(n => n > 20); // índice do primeiro
const copia      = numeros.slice(1, 3);            // cópia de trecho

// Ordenação
const letras = ["c", "a", "b"];
letras.sort(); // ordena in-place: ["a", "b", "c"]

// Sort numérico (sort converte para string por padrão!)
[30, 5, 100, 2].sort((a, b) => a - b); // [2, 5, 30, 100]

// Verificar se é array
console.log(Array.isArray(numeros)); // true

// Spread — espalha elementos
const mais = [...numeros, 99, 100];

// Desestruturação de array
const [primeiro, segundo, ...resto] = [1, 2, 3, 4, 5];
console.log(primeiro); // 1
console.log(segundo);  // 2
console.log(resto);    // [3, 4, 5]




// ============================================================
// 10. OBJETOS
// ============================================================

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2023,
  ligar: function() {
    console.log("Vrum!");
  },
  // Método com arrow function (atenção: não tem seu próprio 'this')
  descricao: () => "Carro moderno",
  // Método curto (shorthand)
  info() {
    return `${this.marca} ${this.modelo}`;
  }
};

// Acesso a propriedades
console.log(carro.marca);        // notação ponto
console.log(carro["modelo"]);    // notação colchete (útil com variáveis)

// Adicionar / modificar / deletar
carro.cor = "prata";     // adiciona
carro.ano = 2024;        // modifica
delete carro.cor;        // remove

// Desestruturação de objeto
const { marca, modelo, ano } = carro;
console.log(marca); // "Toyota"

// Desestruturação com renomeação
const { marca: fabricante } = carro;
console.log(fabricante); // "Toyota"

// Desestruturação com valor padrão
const { combustivel = "gasolina" } = carro;
console.log(combustivel); // "gasolina"

// Spread de objeto — copia e mescla
const carroAtualizado = { ...carro, ano: 2025, cor: "azul" };

// Métodos úteis de Object
console.log(Object.keys(carro));    // array com as chaves
console.log(Object.values(carro));  // array com os valores
console.log(Object.entries(carro)); // array de pares [chave, valor]




// ============================================================
// 11. CLASSES (POO — Programação Orientada a Objetos)
// ============================================================




class Animal {
  // Construtor — executado ao criar um novo objeto
  constructor(nome, som) {
    this.nome = nome; // propriedade da instância
    this.som  = som;
  }

  // Método de instância
  falar() {
    return `${this.nome} faz: ${this.som}`;
  }

  // Método estático — chamado na classe, não na instância
  static criar(nome, som) {
    return new Animal(nome, som);
  }
}

// Herança — extends
class Cachorro extends Animal {
  constructor(nome) {
    super(nome, "Au au"); // chama o construtor da classe pai
    this.especie = "Canis lupus familiaris";
  }

  buscar(objeto) {
    return `${this.nome} buscou o ${objeto}!`;
  }
}

const gato = new Animal("Miau", "Miau");
const rex  = new Cachorro("Rex");

console.log(gato.falar());       // "Miau faz: Miau"
console.log(rex.falar());        // "Rex faz: Au au" (herdado)
console.log(rex.buscar("bola")); // "Rex buscou o bola!"
console.log(rex instanceof Cachorro); // true
console.log(rex instanceof Animal);   // true




// ============================================================
// 12. TRATAMENTO DE ERROS
// ============================================================

try {
  // Código que pode gerar um erro
  let resultado = JSON.parse("texto inválido");
} catch (erro) {
  // Captura o erro
  console.log("Erro capturado:", erro.message);
} finally {
  // Sempre executado, com ou sem erro
  console.log("Bloco finally executado.");
}

// Lançar erro personalizado
function dividirSeguro(a, b) {
  if (b === 0) throw new Error("Divisor não pode ser zero!");
  return a / b;
}

try {
  console.log(dividirSeguro(10, 0));
} catch (e) {
  console.log(e.message); // "Divisor não pode ser zero!"
}




// ============================================================
// 13. ASSINCRONISMO — CALLBACKS, PROMISES E ASYNC/AWAIT
// ============================================================

// --- Callback (forma mais antiga) ---
function buscarDados(callback) {
  setTimeout(() => {
    callback("dados recebidos");
  }, 1000);
}
buscarDados((resultado) => console.log(resultado));


// --- Promise ---
// Uma Promise representa um valor que ainda não está disponível.
// Estados: pending → fulfilled (resolve) ou rejected (reject)

const promessa = new Promise((resolve, reject) => {
  let sucesso = true;
  if (sucesso) {
    resolve("Operação bem-sucedida!");
  } else {
    reject("Algo deu errado.");
  }
});

promessa
  .then(resultado => console.log(resultado))  // sucesso
  .catch(erro     => console.log(erro))       // falha
  .finally(()     => console.log("Finalizado!")); // sempre

// Promise.all — executa várias promises em paralelo
Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
]).then(valores => console.log(valores)); // [1, 2, 3]


// --- Async / Await (forma moderna e legível) ---
async function obterUsuario(id) {
  try {
    // await pausa a execução até a Promise resolver
    const resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const usuario  = await resposta.json();
    return usuario;
  } catch (erro) {
    console.log("Erro ao buscar usuário:", erro.message);
  }
}

// Funções async sempre retornam uma Promise
obterUsuario(1).then(u => console.log(u?.name));




// ============================================================
// 14. MÓDULOS (ES Modules)
// ============================================================

// Em arquivos separados, usamos export e import.
// Exemplos (não executáveis aqui diretamente):

// --- arquivo: matematica.js ---
// export function somar(a, b) { return a + b; }
// export const PI = 3.14159;
// export default function principal() { return "padrão"; }

// --- arquivo: main.js ---
// import principal, { somar, PI } from "./matematica.js";
// import * as mat from "./matematica.js"; // importa tudo como objeto




// ============================================================
// 15. MANIPULAÇÃO DO DOM (no navegador)
// ============================================================

// Selecionar elementos
// const el     = document.getElementById("meu-id");
// const els    = document.querySelectorAll(".minha-classe");
// const titulo = document.querySelector("h1");

// Alterar conteúdo e estilo
// titulo.textContent = "Novo título";
// titulo.innerHTML   = "<em>Título</em> formatado";
// titulo.style.color = "red";
// titulo.classList.add("ativo");
// titulo.classList.remove("oculto");
// titulo.classList.toggle("selecionado");

// Criar e inserir elementos
// const div = document.createElement("div");
// div.textContent = "Novo elemento";
// document.body.appendChild(div);

// Eventos
// titulo.addEventListener("click", () => {
//   console.log("Clicou no título!");
// });

// Remover evento
// const handler = () => console.log("clique");
// titulo.addEventListener("click", handler);
// titulo.removeEventListener("click", handler);




// ============================================================
// 16. RECURSOS MODERNOS (ES6+)
// ============================================================

// Computed property names — nome de chave dinâmico
const chave = "cor";
const obj   = { [chave]: "azul" }; // { cor: "azul" }

// Shorthand properties — quando variável e chave têm o mesmo nome
const altura = 180;
const peso   = 75;
const dados  = { altura, peso }; // equivale a { altura: altura, peso: peso }

// Generators — funções pausáveis com yield
function* gerador() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = gerador();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2

// Symbol — valor único e imutável
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2); // false — sempre únicos

// Map — como objeto, mas chaves podem ser qualquer tipo
const mapa = new Map();
mapa.set("nome", "Ana");
mapa.set(42, "número como chave");
console.log(mapa.get("nome")); // "Ana"
console.log(mapa.size);        // 2

// Set — coleção de valores únicos
const conjunto = new Set([1, 2, 2, 3, 3, 3]);
console.log([...conjunto]); // [1, 2, 3]
conjunto.add(4);
conjunto.has(2); // true
conjunto.delete(1);

// WeakMap e WeakSet — versões com referências fracas (para GC)




// ============================================================
// 17. JSON — FORMATO DE TROCA DE DADOS
// ============================================================

// JSON.stringify — objeto → string JSON
const objeto = { nome: "Lucas", idade: 28 };
const jsonStr = JSON.stringify(objeto);
console.log(jsonStr); // '{"nome":"Lucas","idade":28}'

// JSON com formatação
console.log(JSON.stringify(objeto, null, 2));

// JSON.parse — string JSON → objeto
const parseado = JSON.parse(jsonStr);
console.log(parseado.nome); // "Lucas"




// ============================================================
// 18. EXPRESSÕES REGULARES (REGEX)
// ============================================================

// Criação de regex
const regexEmail = /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i;

// test — retorna true/false
console.log(regexEmail.test("teste@email.com")); // true
console.log(regexEmail.test("invalido"));        // false

// match — retorna os matches encontrados
const frase2 = "O número é 42 e outro é 100";
const matches = frase2.match(/\d+/g); // /g = global (todos)
console.log(matches); // ["42", "100"]

// replace com regex
console.log("hello world".replace(/\b\w/g, l => l.toUpperCase())); // "Hello World"


// ============================================================
// 19. BOAS PRÁTICAS
// ============================================================

// ✅ Use const por padrão, let quando precisar reatribuir, nunca var
// ✅ Prefira === a == (comparação estrita)
// ✅ Nomeie funções e variáveis de forma descritiva
// ✅ Use arrow functions para callbacks curtos
// ✅ Evite funções muito longas — quebre em funções menores
// ✅ Trate erros com try/catch em código assíncrono
// ✅ Use async/await em vez de encadeamento de .then()
// ✅ Comente o "porquê", não o "o quê" (o código já diz o quê)
// ✅ Use linters como ESLint para padronização


// ============================================================
// FIM DO GUIA — JavaScript: do básico ao avançado
// ============================================================