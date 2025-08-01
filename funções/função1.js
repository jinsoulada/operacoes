// verificando se o número é positivo
function verificarNumero (num) {
    if (num > 0) {
        console.log("O número é positivo!");
    } else if (num < 0) {
        console.log("O número é negativo!");
    } else { (num = 0)
        console.log("O número é zero!");
    }
}

verificarNumero (-80)
verificarNumero (9999)
verificarNumero (0)

//verificar idade
function verificarIdade (idade) {
    if (idade >= 18) {
        return "Maior de idade.";
    } else {
        return "Menor de idade.";
    }
}

console.log(verificarIdade(20));
console.log(verificarIdade(16));
console.log(verificarIdade(18));

