function calcular_nota_final(nota_n1, nota_n2) {

    let nota_final = ((nota_n1 * 2) + (nota_n2 * 3)) / 5;

    if (nota_final >= 7) {
        return `Aprovado com ${nota_final.toFixed(2)}`;
    } else {
        return `Reprovado com ${nota_final.toFixed(2)}`;
    }
    
}

console.log(calcular_nota_final(10, 10))