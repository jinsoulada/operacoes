//definindo uma classe
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    desconto(percentual) {
        return this.preco *(1 - percentual /100);
    }
}

const produto1 = new Produto("Camiseta", 39.90);
const produto2 = new Produto("Calça", 100.00);

console.log(produto1.nome);
console.log(produto1.desconto(20));
console.log(produto2.nome);
console.log(produto2.desconto(20));