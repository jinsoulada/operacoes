//classe pau (superclasse)
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }


//Metodo para fazer som
fazerSom() {
    console.log(`${this.nome} faz um som.`);
}

//metodo para mostrar informações
mostrarInfo() {
    console.log(`Nome: ${this.nome}. Idade: ${this.idade}`);
}
}
//criar a classe filha
class Macaco extends Animal {
    fazerSom() {
        console.log(`${this.nome} faz: hu hu ha ha`)
    }
}

const animal1 = new Animal("Primata", 5);
const chimpanze = new Macaco("Xixo", 7);

animal1.fazerSom();
chimpanze.fazerSom();
chimpanze.mostrarInfo();