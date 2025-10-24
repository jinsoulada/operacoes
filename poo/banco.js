class ContaBancaria {
    #saldo; //propiedade privada

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            console.log(`Depósito de R$ ${valor} realizado`);
        } else {
            console.log("Valor inválido")
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo += valor;
            console.log(`Saque de R$ ${valor} realizado com sucesso!`);
        } else {
            console.log("Saldo insulficiente ou valor inválido!")
        }

    }

    consultarSaldo() {
        return this.#saldo;
    }
}

// Testando
const minhaConta = new ContaBancaria(1000);
minhaConta.depositar(500);
minhaConta.sacar(200);
console.log(`Saldo atual: R$ ${minhaConta.consultarSaldo()}`)