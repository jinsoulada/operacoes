class Notificacao {
    constructor(mensagem) {
        this.mensagem = mensagem;
        this.dataEnvio = new Date();
    }

    // Método que deve ser implementado nas subclasses.
    enviar() {
        throw new Error("Método enviar() deve ser implementado nas subclasses.");
    }

    formatarMensagem() {
        // Usando toLocaleString() para uma formatação mais amigável, como você já estava fazendo.
        return `[${this.dataEnvio.toLocaleString()}] ${this.mensagem}`;
    }
}

class NotificacaoEmail extends Notificacao {
    constructor(mensagem, destinario) {
        // Chamada obrigatória ao construtor da classe pai
        super(mensagem);
        this.destinario = destinario;
    }

    enviar() {
    return `📧 Email enviado para ${this.destinario}: ${this.formatarMensagem()}`;
    }
}

class NotificacaoSMS extends Notificacao {
    constructor(mensagem, telefone) {
        super(mensagem);
        this.telefone = telefone;
    }

    enviar() {
        // Garante que a mensagem não exceda 160 caracteres (típico de SMS)
        const msgCurta = this.mensagem.substring(0, 160);
        // Corrigido "envado" para "enviado"
        return `📱 SMS enviado para ${this.telefone}: ${msgCurta}`;
    }
}

// Corrigido o erro de digitação: NotoficacaoPush -> NotificacaoPush
class NotificacaoPush extends Notificacao {
    constructor(mensagem, dispositivo) {
        super(mensagem);
        this.dispositivo = dispositivo;
    }

    enviar() {
        return `🔔 Push enviado para dispositivo ${this.dispositivo}: ${this.formatarMensagem()}`;
    }
}

class GerenciadorNotificacoes {
    constructor() {
        // Renomeei a propriedade para ser mais idiomática: notificacoes (plural)
        this.notificacoes = []; 
    }

    adicionar(notificacao) {
        // Usa a propriedade renomeada
        this.notificacoes.push(notificacao);
    }

    enviarTodas() {
        // Usa a propriedade renomeada e mapeia chamando o método enviar()
        return this.notificacoes.map(n => n.enviar());
    }
}

const gerenciador = new GerenciadorNotificacoes();
gerenciador.adicionar(new NotificacaoEmail("Bem vindo ao sistema!", "user@email.com"));
gerenciador.adicionar(new NotificacaoSMS("Código de verificação: 1234. Não compartilhe com ninguém.", "+5541999995555"));
// CORRIGIDO: Substituído new Notificacao(...) por new NotificacaoPush(...)
gerenciador.adicionar(new NotificacaoPush("Nova mensagem de chat", "device976431"));

console.log("--- Resultados dos Envios ---");
gerenciador.enviarTodas().forEach(resultado => console.log(resultado));

// Exemplo do erro que ocorreria se você tentasse usar a classe base:
// console.log("\n--- Tentativa de Envio da Classe Base (Causa Erro) ---");
// try {
//     new Notificacao("Teste").enviar();
// } catch (e) {
//     console.log(`ERRO: ${e.message}`);
// }