//gerador de senhas 

function gerarSenha(tamanho=8, incluiNumeros =true, incluiEspeciais=false) {
    let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (incluiNumeros) {
        caracteres += "0123456789";
    }

    if (incluiEspeciais) {
        caracteres += "!@#$%¨&*" 
    }

    let senha ="";
    for (let i = 0; i < tamanho; i++) {
        let indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indiceAleatorio];
    }

    return{
        senha: senha,
        tamanho: senha.length,
        configuracao: {
            incluiNumeros: incluiNumeros,
            incluiEspeciais: incluiEspeciais
        }
    };
}

//gerar diferente tipos de senha
console.log("Senha simples: ", gerarSenha(6));
console.log("Senha com números: ", gerarSenha(10,true));
console.log("Senha simples: ", gerarSenha(90,true,true));
console.log("Senha com especiais: ", gerarSenha(20,false,true));