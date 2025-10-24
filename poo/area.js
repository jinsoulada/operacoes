class Forma {
    calcularArea() {
        return 0
    }

    descrever() {
        return `Área: ${this.calcularArea()}`
    }
}

class Retangulo extends Forma {
    constructor(largura, altura) {
        super();
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea() {
        return this.largura * this.altura;
    }
}

class Circulo extends Forma {
    constructor(raio) {
        super();
        this.raio = raio;
    }

    calcularArea() {
        return Math.PI * this.raio ** 2;
    }
}

class Triangulo extends Forma {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}

//Modos de uso para Polimorfismo
const formas = [
    new Retangulo(5, 10),
    new Circulo(7),
    new Triangulo(6, 8)
];

formas.forEach(forma => {
    console.log(`${forma.constructor.name}: ${forma.descrever()}`);
})