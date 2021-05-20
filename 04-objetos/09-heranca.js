// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = "0"; // não é recomendado manipular o "Object.prototype"

const avo = {
  attr1: "A",
};

const pai = {
  __proto__: avo,
  attr2: "B",
  attr3: "3",
};

const filho = {
  __proto__: pai,
  attr3: "C",
};

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);
// -> 0 A B C

// =========== Exemplo 2 ==================

const carro = {
  velAtual: 0,
  velMax: 200,

  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },

  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
  },
};

const ferrari = {
  modelo: "F40",
  velMax: 324, // shadowing - vai passar a valer essa "velMax" para "ferrai"
};

const volvo = {
  modelo: "V40",
  status() { // esse "status()" vai sombrear o "status()" do objeto "carro"
    return `${this.modelo}: ${super.status()}`;
    // "super." chama a função do seu prototype, no caso "status()" do objeto "carro"
  },
};

// Estabelecendo a relação de prototypos....
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
// -> { modelo: 'F40', velMax: 324 }
console.log(volvo);
// -> { modelo: 'V40', status: [Function: status] }

volvo.acelerarMais(100);
console.log(volvo.status()); // usou a propria função de "status()" do objeto "volvo"
// -> "V40: 100Km/h de 200Km/h"

ferrari.acelerarMais(300);
console.log(ferrari.status()); // buscou a função no seu prototype que é o objeto "carro"
// -> "300Km/h de 324Km/h"
