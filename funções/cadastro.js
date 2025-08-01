const prompt = require('prompt-sync')();

let nome = prompt('Digite seu nome: ');
let idade = parseInt(prompt('Digite a sua idade:'));
let salario = parseInt(prompt('Salário: '));

console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);
console.log(`Salário: R$ ${salario.toFixed(2)}`);

//para confirmar
let continuar = prompt('Deseja continuar o cadastro? (s/n)');
if (continuar.toLowerCase() === 'n') {
    console.log('Cadastro realizado com sucesso.');
} else (continuar.toLowerCase() === 's'); {
    console.log('Vamos continuar...');
}