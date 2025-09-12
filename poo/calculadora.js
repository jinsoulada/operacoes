class Calculadora {
    //Criar métodos para as operações
    somar(a,b) {
        return a + b;
    }

    subtrair(a,b) {
        return a - b;
    }

    multiplicar(a,b) {
        return a * b;
    }

    dividir(a,b) {
        if (b === 0) {
            return "Erro: não é possível dividir por zero!"
        }
           return a / b;
    }

    potencia(base, expoente) {
        return Math.pow(base, expoente)
    }
}

const calc = new Calculadora();

console.log(`A soma de 10 + 5 = ${calc.somar(10,5)}`);
console.log(`A subtração de 10 - 5 = ${calc.subtrair(10,5)}`);
console.log(`A multiplicação de 10 * 5 = ${calc.multiplicar(10,5)}`);
console.log(`A divisão de 10 / 5 = ${calc.dividir(10,5)}`);
console.log(`A potenciação de 10³= ${calc.potencia(10,3)}`);
