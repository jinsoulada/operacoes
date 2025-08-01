// calcular o imc (Indice de massa corporal)

 function calcularIMC(peso, altura, mostraCategoria = true) {
const imc = peso / (altura * altura);
     if (!mostraCategoria) {
         return imc.toFixed(2);
     }
// determinar a categoria do imc

    let categoria
        if(imc < 18.5) {
            categoria = "Abaixo do peso";
        } else if (imc < 25) {  
            categoria = "peso normal";
        } else if (imc < 30) {
            categoria = "sobrepeso";
        } else if (imc < 35) {
            categoria = "obesidade grau I";
        } else if (imc < 40) {
            categoria = "obesidade grau II";
        } else  {
            categoria = "Obesidade grau III"
        }

        return {
            imc:imc.toFixed(2),
            categoria: categoria
        } ;
}

console.log(calcularIMC(20, 1.73))
console.log(calcularIMC(74, 1.73))
console.log(calcularIMC(84, 1.73))
console.log(calcularIMC(99, 1.73))
console.log(calcularIMC(110, 1.73))
console.log(calcularIMC(200, 1.73))