// solução do Lucas

while(true) {

    let inicio = Number(prompt("Digite o número de início:"));
    let fim = Number(prompt("Digite o número de fim:"));
    let soma = 0;

    if (inicio > fim) {
        inicio, fim = fim, inicio; // deestruturação funcina em qualquer estrutura de dados do JS. Isso evita ocupar mais memória criando uma variável extra.

        //let aux = inicio;
        //inicio = fim;
        //fim = aux;
    }

    if (fim - inicio < 10) {
        console.log("intervalo inválido")
        continue; // volta para o ínicio do loop
    }

    // se passou, o intervalo é maior que 10 e há pelo menos 5 ímpares.

    if (inicio % 2 === 0) {
        inicio++; // para que não começe com um valor par, garantimos que começe com um valor ímpar.
    }

    let quantidadeImpares = 0;

    for (let i = inicio; i < fim && quantidadeImpares < 5; i += 2) { // contador += 2 garante que somaremos apenas os ímpares.
        soma += i;
        quantidadeImpares++;
    }

    alert(soma);

    break;
}


