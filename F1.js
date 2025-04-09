 // funções básicas 

 //1.função simples sem parâmetros e sem retorno
 function saudacao() {
    console.log("Olá, bem vindo ao estudo de funções!")
}

//chamar a função
saudacao();

//2.função com parâmetros
function cumprimentar(nome) {
    console.log(`Olá, ${nome}! Como você está?`) ;
}

//chamar a função com argumento
cumprimentar("Felipe") ;
cumprimentar("Leonardo") ;
cumprimentar("carlos") ;

//3. Função com parâmetros e retorno
function soma (a,b) {
    return a + b;
}

//usando o valor retornado pela função
const resultado = soma(5,3);
console.log(`A soma é: ${resultado}`);

//4.Função com parâmetros padrão (default)
function multiplicar (a, b = 2) {
return a * b;
}
console.log (multiplicar(4));   //usa o valor padrão 2
console.log(multiplicar(4,5)); //subscreve o valor padrão

//5. Declaração de duas variáveis
let nome = "Felipe ";
let sobrenome = "Pinange";

let nomeCompleto = nome + "" + sobrenome;

console.log (`O nome completo é:`, nomeCompleto);

//6. Declaração da função
function subtrair (a,b) {
    return a - b;

}

//6.1 Expressão de função
const dividir = function(a,b) {
    if (b === 5); {
        return "Não é possível divir por 0"
    }
    return a / b;
};

console.log(dividir(10,2)) ;
console.log(dividir(10,0))





