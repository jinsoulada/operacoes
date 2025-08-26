class Cachorro{
    constructor(nome, idade, raca) {
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
    }
      //crianr métodos para o cachorro
      latir() {
          return `Quando o ${this.nome} late, ele faz AU AU `;
      }
      dormir() {
          return `${this.nome} está dormindo... ZZzzZZz`;
      }
      perguntar() {
          return `A raça ${this.raca} é muito conhecida`;
      }
      comer() {
          return `Sua ração é especifica para ${this.idade} anos.`;
      }
}

const dog1 = new Cachorro("Bartalomeu", 9, "Rotweiller");

console.log(dog1.latir());
console.log(dog1.dormir());
console.log(dog1.perguntar());
console.log(dog1.comer());
