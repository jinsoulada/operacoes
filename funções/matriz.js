// for loop - matriz de multiplicação
console.log("Matriz");
const tamanhoMatriz = 4;
let matriz = [];

// criando e preenchendo a matriz
for (let linha = 0; linha < tamanhoMatriz; linha++) {
    matriz[linha] = [];

    for(let coluna = 0; coluna < tamanhoMatriz; coluna++) {
        matriz[linha][coluna] = (linha + 1) * (coluna + 1);
    }
}

//exibir a matriz formaatada
console.log("Matriz de multiplacação 4x4:");
console.log("", "1", "2", "3", "4");
console.log("    +-----------");

for(let i = 0; i < tamanhoMatriz; i++) {
    let linhaFormatada = `${i + 1} |`;

    for(let j = 0; j < tamanhoMatriz; j++) {
        linhaFormatada += `${matriz[i][j].toString().padStart(2,'')}`;
    }
    console.log(linhaFormatada);
}

//calcular a soma da diagonal principal
let somaDiagonal = 0;
for (let d = 0; d < tamanhoMatriz; d++) {
    somaDiagonal += matriz[d][d];
}
console.log(`\nSoma da diagonal principal: ${somaDiagonal}`);

// Testando 
console.log("\n===Exemplo Bônus: While com Brak e Continue===");
let numeroAtual = 0;
let numerosPares = [];
let numerosImpares = [];

while (true) {
    numeroAtual++;
    if (numeroAtual > 20) {
        break
    }
    if (numeroAtual % 5 === 0) {
        console.log(`Pulando o número ${numeroAtual} (múltiplo de 5)`);
        continue;
    }
    if (numeroAtual % 2 === 0) {
        numeroPares.push(numeroAtual);
    } else {
        numeroImpares.push(numeroAtual);
    }
}

console.log(`Números Pares (exceto múltiplo de 5): [${numeroPares.join(", ")}]`);
console.log(`Números Ímpares (exceto múltiplo de 5): [${numeroImpares.join(", ")}]`);
