//Classe base para veículos
class Veiculo {
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = false; //estado inicial
    }

    //Método para ligar o veículo
    ligar() {
        this.ligado = true;
        console.log(`O carro ${this.marca} ${this.modelo} está ligado.`);
    }

    //Método para desligar o veículo
    desligar(){
        this.ligado = false;
        console.log(`O carro ${this.marca} ${this.modelo} está desligado`);
    }

    //Método para obter informações
    getInfo() {
        return (`${this.marca} - ${this.modelo} - ${this.ano}`);
    }
}

//Classe filha com  constructor personalizad
class Carro extends Veiculo {
    constructor(marca, modelo, ano, portas) {
        super(marca, modelo, ano);
        this.portas = portas;
        this.velocidade = 0;
    }
        //Método específico de Carro
        acelerar(incremento) {
            if (this.ligado) {
                this.velocidade += incremento;
                console.log(`${this.getInfo()} acelerou para ${this.velocidade}km/h`);
            } else {
                console.log("Precisa ligar o carro primeiro!")
            }
        }

        getInfo() {
            return`${super.getInfo()} - ${this.portas} portas`;
        }

}
const carro1 = new Carro("Toyota", "Corolla", 2023, 4);
console.log(carro1.getInfo());
carro1.acelerar(40);
carro1.ligar();
carro1.desligar();