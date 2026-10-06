class ContaBancaria {

    constructor(saldo, numero_conta) {
        this.saldo = saldo;
        this.numero_conta = numero_conta;
    }

    depositar(valor_deposito) {
        this.saldo += valor_deposito;
    }

    sacar(valor_saque) {
        if (valor_saque <= this.saldo) {
            this.saldo -= valor_saque;
            return;
        }
        console.log("Não é possível sacar.");
    }

    informarSaldo() {
        console.log(`Seu saldo é de ${this.saldo}`);
    }
}

const conta1 = new ContaBancaria(100, 1234);

conta1.informarSaldo();
conta1.depositar(100);
conta1.informarSaldo();
conta1.sacar(200);
conta1.informarSaldo();

const elementoSaldo = document.getElementById("saldo");

elementoSaldo.textContent = `saldo: RS ${conta1.saldo}`;

document.getElementById("depositar").addEventListener("click", function() {
    conta1.depositar(100);

    elementoSaldo.textContent = `saldo: R$ ${conta1.saldo}`;
});

document.getElementById("sacar").addEventListener("click", function () {
    
    conta1.sacar(200);
    elementoSaldo.textContent = `Saldo: R$ ${conta1.saldo}`;
});