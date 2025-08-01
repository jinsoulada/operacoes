// while loop
console.log("*** Jogo da Adivinhação ****")
const numeroSecreto = 42;
let tentativa = 0;
let palpite = 0;
let acertou = false;

// simulado palpites aleatórios
const palpitesPossiveis = [25, 50, 30, 45, 40, 41, 35]
let indicePalpite = 0;

while(!acertou && tentativa < 6) {
    tentativa++
    palpite = palpitesPossiveis[indicePalpite];
    indicePalpite++

    console.log(`Tentativa ${tentativa}: Palpite = ${palpite}`);

    if(palpite === numeroSecreto) {
        acertou == true ;
        console.log(`😁 Parabéns!! Você acertou em ${tentativa} tentativas!`)
    } else if (palpite < numeroSecreto) {
        console.log("Muito baixo! Tente um número maior! 🙄");
    } else {
        console.log("Muito alto! Tente um número menor 🙄");
    }
}

    if (!acertou) {
        console.log(`***💩 Game Over! O número era ${numeroSecreto}***`)
    }
