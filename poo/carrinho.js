class carrinhoCompras {
    #itens;
    #limiteItens;
    #valorMaximo;

    constructor(limiteItens = 10, valorMaximo = 5000) {
        this.#itens = [];
        this.#limiteItens = limiteItens;
        this.valorMaximo = valorMaximo;
    }

    #calcularTotal() {
        return this.#itens.reduce((total, item) => total + item.preco, 0);
    }

    #validarAdicao(preco) {
        if (this.#itens.length >= this.#limiteItens) {
            console.log(`Limite de ${this.#limiteItens} itens atingido!`);
            return false;
        }

        if (this.#calcularTotal() + preco > this.#valorMaximo) {
            console.log(`Valor máximo de R$ ${this.#valorMaximo} foi ultrapassada!`);
            return false;
        }

        return true;
    }

    adicionarItem(nome, preco, quantidade = 1) {
        if (preco <= 0 || quantidade <= 0) {
            console.log("Preço e quantidade devem ser prositivos!");
            return false ;
        }

        const precoTotal = preco * quantidade;

        if  (this.#validarAdicao(precoTotal)) {
            this.#itens.push({nome, preco: precoTotal, quantidade});
            console.log(`${quantidade} x ${nome} adicionando(s) ao carrinho!`);
            return true;
        }

        return false;
    }

    removerItem(nome) {
        const indice = this.#itens.findIndex(item => item.nome === nome);

        if (indice !== -1) {
            const itemRemovido = this.#itens.splice(indice, 1) [0];
            console.log(`${itemRemovido.nome} removido do carrinho`);
            return true;
        } else {
            console.log("Item não encontrado!");
            return false;
        }
    }

    aplicarCupomDesconto(codigo) {
        const cuponsValidos = { "DESC10": 0.1, "DESC20": 0.2};

        if (cuponsValidos[codigo]) {
            const desconto = this.#calcularTotal() * cuponsValidos[codigo];
            console.log(`Cupom ${codigo} aplicado! Desconto: R$ ${desconto.toFixed(2)}`);
            return desconto;
        } else {
            console.log("Cupom invalido!")
            return 0;
        }
    }

    exibirResumo() {
        console.log("\n--- RESUMO DO CARRINHO ---");
        this.#itens.forEach(item => {
            console.log(`${item.quantidade} x ${item.nome} - R$ ${item.preco.toFixed(2)}`);
            console.log(`Total: R$ ${this.#calcularTotal().toFixed(2)}`);
            console.log(`Item: ${this.#itens.length} / ${this.#limiteItens}`)});
    }

    getQuantidadeItens() {
        return this.#itens.length;
    }

    getTotal() {
        return this.#calcularTotal();
    }
}

//Casos de uso
const carrinho = new carrinhoCompras(5, 3000);
carrinho.adicionarItem("Notebook", 2000, 1);
carrinho.adicionarItem("Mouse", 150, 1);
carrinho.adicionarItem("Bolsa para notebook", 300, 1);
carrinho.exibirResumo("DESC10");
carrinho.removerItem("Mouse");
carrinho.exibirResumo();