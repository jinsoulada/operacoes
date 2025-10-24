function Funcionario(nome, salario, departamento) {
    this.nome = nome;
    this.salario = salario;
    this.departamento = departamento;
    this.ativo = true;

};

Funcionario.prototype.trabalhar = function() {
    console.log(`${this.nome} está trabalhando no departamento de ${this.departamento}`);
},

//Herança clássica: baseada em classes, estrutura fixa, copia um comportamento e hierarquia rigida.
//Herança prototipica: baseada em objeto, estrutura dinâmica, delega comportamento e cadeia.

Funcionario.prototype.receberSalario = function() {
    console.log(`${this.nome} recebeu o salário de R$${this.salario.toFixed(2)}`);
};

Funcionario.prototype.dimitir = function() {
    this.ativo = false;
    console.log(`${this.nome} foi demitido`);
};

Funcionario.prototype.info = function() {
    const status = this.ativo ? "Ativo" : "Inativo";
    console.log(`Funcionario : ${this.nome} | Salário : R$ ${this.salario.toFixed(2)} |
    Depto: ${this.departamento} | Status: ${this.status}`);
};

//Construtor derivado: Desenvolvedor
function Desenvolvedor(nome, salario, linguagem, senioridade) {
    Funcionario.call(this, nome, salario, "T1");
    this.linguagem = linguagem;
    this.senioridade = senioridade;
    this.projetos = [];
};

//Configurando a herança prototípica
Desenvolvedor.protoype = Object.create(Funcionario.prototype);
Desenvolvedor.prototype.constructor = Desenvolvedor;

Desenvolvedor.prototype.programar = function() {
    console.log(`${this.nome} está programando em ${this.linguagem}`);
};

//Criar um método para que o desenvolvedor faça projetos "adicionarprojetos"
Desenvolvedor.prototype.adicionarProjetos = function(projeto) {
    this.projetos.push(projeto);
    console.log(`${this.nome} foi adicionado: ${projeto}`);
};

Desenvolvedor.prototype.trabalhar = function() {
    console.log(`${this.nome} (${this.senioridade}) está desenvolvendo
        software`);
};

Desenvolvedor.prototype.info = function() {
    const status = this.ativo ? "Ativo" : "Inativo";
    console.log(`Desenvolvedor : ${this.nome} | ${this.senioridade} |
        ${this.linguagem} | Projeto: ${this.projetos.lenght} | 
        ${this.status}`);
};

//Constructor derivado: Gerente
function Gerente(nome, salario, departamento, equipe) {
    Funcionario.call(this, nome, salario, departamento);
    this.equipe = equipe || [];
    this.bonus = 0;
}

Gerente.prototype = Object.create(Funcionario.prototype);
Gerente.prototype.constructor = Gerente;

Gerente.prototype.gerenciar = function() {
    console.log(`${this.nome} está gerenciando uma equipe de ${this.equipe.lenght}
        pessoas`);
};

Gerente.prototype.adicionarFuncionario = function(funcionario) {
    this.equipe.push(funcionario)
    console.log(`${funcionario} foi adicionado à equipe de ${this.nome}`);
};

Gerente.prototype.darBonus = function(valor) {
    this.bonus = valor;
    console.log(`${this.nome} recebeu um bônus de R$ ${valor.toFixed(2)}`);
};

Gerente.prototype.receberSalario = function() {
    const total = this.salario = this.bonus;
    console.log(`${this.nome} recebeu salário + bonus: R$ ${total.toFixed(2)}`);
    this.bonus = 0;
};

console.log("*** TESTANDO HERANÇA PROTOTÍPCA ***")

const funcionario1 = new Funcionario("Diana", 3000, "RH");
funcionario1.trabalhar();
funcionario1.receberSalario();
funcionario1.info();
console.log();

const dev = new Desenvolvedor("Pedro", 6000, "JavaScript", "Senior");
dev.programar();
dev.adicionarProjetos("Sistema de E-commerce");
dev.trabalhar();
//dev.receberSalario();
dev.receberSalario();
console.log();

const Gerente = new Gerente("Oscar", 1000, "Gerente", "T1");
Gerente.adicionarFuncionario("Anna K.");
Gerente.gerenciar();
Gerente.darBonus(3000);
Gerente.receberSalario();