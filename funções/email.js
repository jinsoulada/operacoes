// valida email

function validarEmail(email) {
    if (!email.includes('@') || !email.includes(".")) {
        return{
            valido:false,
            mensagem: "Email deve conter @ e pelo menos um ponto."
        }

    }
    //verificar se @ vem antes do ponto
    let posicaoArroba = email.indexOf('@');
    let posicaoPonto = email.lastIndexOf('.');

    if(posicaoArroba >= posicaoPonto) {
        return {
            valido:false,
            mensagem: "Formato de Email inválido"
        }
    }

    return {
        valido:true,
        mensagem:"Email válido"
    };
}

console.log(validarEmail("josefinacristo@gmail.com"))
console.log(validarEmail("josefinacristo@oi"))
console.log(validarEmail("josefinacristo@gmailcom"))