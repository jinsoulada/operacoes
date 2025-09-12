class livro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor
        this.paginas = paginas;
        this.paginaAtual = 0;
        this.lido = false;

    }

    lerPaginas(numeroPaginas) {
        if (this.lido) {
            return `Você já terminou de ler ${this.titulo}!`;
        }
        this.paginaAtual += numeroPaginas;

        if (this.paginaAtual >= this.paginas) {
            this.paginaAtual = this.paginas;
            this.lido = true;
            return `Parabéns! Você terminou de ler ${this.titulo}!`;
        }

        return `Você leu ${numeroPaginas} páginas. Está na página ${this.paginaAtual} de ${this.paginas}.`;
    }

    verProgresso() {
        if (this.lido) {
            return `"${this.titulo} COMPLETO!"`
        }

        const porcentagem = Math.round(this.paginaAtual / this.paginas * 100);
        return `"${this.titulo}" - progresso: ${this.paginaAtual}/${this.paginas} páginas (${porcentagem}%)`;
    }

    reiniciarLeitura() {
        this.paginaAtual = 0;
        this.lido = false;
        return `Leitura de "${this.titulo}" reiniciada!`
    }

    mostraDetalhes() {
        const status = this.lido ? "LIDO" : "NÂO LIDO";
        return `
        Título: ${this.titulo}
        Autor: ${this.autor}
        Páginas: ${this.paginas}
        Status: ${status}
        Página Atual: ${this.paginaAtual}
        `.trim();
    }
}

const livro1 = new livro("Dom Casmurro", "Machado de Assis", 200);
const livro2 = new livro("O Pequeno Principe", "Antoine de Saint-Exúpery", 120);

console.log("\n MOSTRANDO OS RESULTADOS ");
console.log(livro1.mostraDetalhes());
console.log("");

//Simulando a leitura
console.log("Começando a ler...")
console.log(livro1.lerPaginas(50));
console.log(livro1.verProgresso());
console.log("");

console.log(livro1.lerPaginas(100));
console.log(livro1.verProgresso());
console.log("");

//Testando o segundo livro
console.log("Começando a ler...")
console.log(livro2.lerPaginas(30));
console.log(livro2.verProgresso());
console.log("");