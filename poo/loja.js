class Produto {
    #nome;
    #preco;

    constructor(nome, preco) {
        this.nome = nome;
        this.#preco = preco;
    }

    getNome() {
        return this.#nome;
    }

    getPreco() {
        return this.#preco;
    }

    aplicarDesconto(percentual) {
        if (percentual > 0 && percentual <= 100) {
            const desconto = this.#preco * (percentual / 100);
            this.#preco = desconto;
            console.log(`Desconto de ${percentual}% aplicado!`);
        } else {
            console.log("Não há desconto disponível! Siga a venda normalmente.")
        }
    }

    exibirInfo() {
        console.log(`Produto: ${this.nome} - Preço: R$ ${this.#preco.toFixed(2)}`)
    }
}

//testando....
const produto1 = new Produto("Notebook", 3000);
produto1.exibirInfo();
produto1.aplicarDesconto(12);
produto1.exibirInfo();