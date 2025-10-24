class Notificacao {
    constructor(mensagem) {
        this.mensagem = mensagem;
        this.dataEnvio = new Date();
    }

    enviar() {
        throw new Error("Método enviar() deve ser implementado.");
    }

    formatarMensagem() {
        return `[${this.dataEnvio.toLocaleString()}] ${this.mensagem}`;
    }
}

class NotificacaoEmail extends Notificacao {
    constructor(mensagem, destinario) {
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
        const msgCurta = this.mensagem.substring(0, 160);
        return `SMS envado para ${this.telefone}: ${msgCurta}`;
    }
}

class NotificacaoPush extends Notificacao {
    constructor(mensagem, dispositivo) {
        super(mensagem);
        this.dispositivo = dispositivo;
    }

    enviar() {
        return `Push enviado para dispositivo ${this.dispositivo}: ${this.formatarMensagem()}`
    }
}

class GerenciadorNotificacoes {
    constructor() {
        this.notificacao = [];
    }

    adicionar(notificacao) {
        this.notificacao.push(notificacao);
    }

    enviarTodas() {
        return this.notificacao.map(n => n.enviar());
    }
}

const gerenciador = new GerenciadorNotificacoes();
gerenciador.adicionar(new NotificacaoEmail("Bem vindo!", "user@email.com"));
gerenciador.adicionar(new NotificacaoSMS("Código: 1234", "+5541999995555"));
gerenciador.adicionar(new Notificacao("Nova mensagem", "device976431"));

gerenciador.enviarTodas().forEach(resultado => console.log(resultado));