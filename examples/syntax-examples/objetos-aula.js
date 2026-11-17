// criação de objetos em javascript:

const conta = {

  numero: "6252-21",
  saldo: 900,

  informarSaldo: function () {
    console.log(`Seu saldo é R$ ${this.saldo}`);
  },

  sacar: function (valor) {
    if (this.saldo < valor) {
      console.log("Saldo insuficiente.");
      return;
    }

    this.saldo -= valor;
  },

  depositar: function (valor) {
    this.saldo += valor;
  }
};

conta.informarSaldo();
conta.sacar(1200);
conta.sacar(300);
conta.informarSaldo();

//Um método é uma função definida como proprireadade de um objeto. Ele
//representa uma ação ou comportamento que esse objeto pode executar.

// this é usado para referenciar o objeto conta, permitindo acessar ou
// modificar suas propriedades.

// não precisa escrever 'function' para declarar um método.

console.log("\nExemplo do carrinho")
const carrinho = {
  itens: [],

  adicionarItem(nome, preco, quantidade = 1) {
    if (preco <= 0 || quantidade <= 0) {
      console.log("Preço e quantidade devem ser positivos.");
      return;
    }

    this.itens.push({ nome, preco, quantidade });
  },

  calcularTotal() {
    return this.itens.reduce((total, item) => total + item.preco * item.quantidade, 0);
  },

  exibirResumo() {
    console.log("Itens do carrinho:");

    this.itens.forEach(item => {
      console.log(
        `${item.nome} - ${item.quantidade} unidades(s)`
      );
    });

    console.log("Total:", this.calcularTotal().toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })
    );
  }
};

carrinho.adicionarItem("Teclado", 250, 1);
carrinho.adicionarItem("Mouse", 80, 2);
carrinho.exibirResumo();

// Observe também que exibirResumo() chama this.calcularTotal(). 
// Assim, um método pode utilizar outro método do mesmo objeto.

// Importância do this:
/*
const car = {
  itens: [],

  adicionarItem(nome, preco) {
    itens.push({ nome, preco });
  }
};
*/
// car é um objeto com duas propriedades: 1. array, 2. função
// nesse exemplo, sem o 'this', 'itens' é interpretado como
// um identificador independente, e não como car.itens.
// como não há variável 'itens' resulta em 'ReferenceError'.

// sobre o comportamento de const em objetos e array:

// o const impede reatribuir uma variável mas permite modificar
// o conteúdo de objetos ou arrays.

const itens = [];
itens.push("Teclado"); // Permitido

const itens_ = [];
//itens_ = ["teclado"];  TypeError
// A segunda operação tenta fazer itens referenciar uma nova array.
// Isso não é permitido com const. Observo que itens[0] = "Teclado"
// seria permitido caso a array já tivesse um elemento.


carrinho.adicionarItem("Teclado", 250);

const conta_arrow = {

  numero: "6252-21",
  saldo: 100,

  informarSaldo: () => { console.log(`Seu saldo é R$ ${this.saldo}`); },

  sacar: (valor) => {
    if (this.saldo < valor) {
      console.log("Saldo insuficiente.");
      return;
    }
  },

  depositar: (valor) => { return this.saldo += valor; },

};

// o this em uma arrow function recebe o escopo léxico.
// use função tradicional para trabalhar com método de um objeto.

// o this usado nas arrow-functions não aponta para conta_arrow
// isso acontece pois a função herda o this do contexto externo
// usando a sintaxe tradicional permite que this se refira ao 
// objeto que chamou o método.

/*
// Método convencional
informarSaldo() {
  console.log(this.saldo);
}

// Arrow function
informarSaldo: () => {
  console.log(this.saldo);
}

Na primeira versão, quando você executa conta.informarSaldo(), 
o this referencia conta. Na segunda, o this é herdado 
do contexto externo em que a arrow function foi criada.
*/

// exemplo útil arrow function
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

console.log(typeof (carrinho.itens))
carrinho_.exibirItens();

/*
Aqui há uma combinação dos dois estilos:
- exibirItens() é um método convencional que utiliza this para acessar carrinho.itens.
- item => { ... } é uma arrow function usada como callback de forEach().
Essa combinação funciona porque a arrow function não cria um novo this: ela herda o this
do método exibirItens(). Assim, o código pode acessar os itens corretamente.
*/

// Use arrow functions principalmente para callbacks e funções 
// em que você deseja  herdar o this do contexto externo.