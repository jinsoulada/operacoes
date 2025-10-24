class Usuario {
    #email;
    #senha;
    #tentativasLogin;
    #bloqueado;


constructor(email, senha) {
    this.#email = email;
    this.#senha = this.#criptografarSenha(senha);
    this.#tentativasLogin = 0;
    this.#bloqueado = false;
}

//tentando simular a criptografia
#criptografarSenha(senha) {
    return senha.split('').reverse().join('') + "_crypt";
}

#validarSenha(senhaFornecida) {
    return this.#criptografarSenha(senhaFornecida) === this.#senha;
}

login(email, senha) {
    if (this.#bloqueado) {
        console.log("Usuário bloqueado! Entre em contato com o suporte.");
        return false;
    }

    if (email === this.#email && this.#validarSenha(senha)) {
        this.#tentativasLogin = 0;
        console.log("Login realizado com sucesso");
        return true;
    } else {
        this.#tentativasLogin++;
        console.log(`Login falhou! Tentativas: ${this.#tentativasLogin}/3`);

        if (this.#tentativasLogin >= 3) {
            this.#bloqueado = true;
            console.log("Conta bloqueada após 3 tentativas!")
        }
        return false;
    }
}

alterarSenha(senhaAtual, novaSenha) {
    if (this.#validarSenha(senhaAtual)) {
        this.#senha = this.#criptografarSenha(novaSenha);
        console.log("Senha alterada com sucesso.");
        return true;
    } else {
        console.log("Senha atual incorreta.");
        return false;
    }
}

getEmail() {
    return this.#email;
}

estaBloqueado() {
    return this.#bloqueado;
}

}

//testando
const us01 = new Usuario("carolina@gmail.com", "senha123");
us01.login("carolina@gmail.com", "senha121");
us01.login("carolina@gmail.com", "senha122");
us01.login("carolina@gmail.com", "senha123");
us01.login("carolina@gmail.com", "senha124");
us01.alterarSenha("senha123", "novasenha456");

