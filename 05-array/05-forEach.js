// A nossa propria implementação de ".forEach()"

// Em "Array.prototype.forEach2" criamos uma função que recebe uma função "callback" como parâmetro.
// Percorremos o array com um laço "for", dentro do "for" chamamos a função "callback" passando
//  três parâmetros, o valor, o indice e o proprio array.
Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

aprovados.forEach2(function (nome, indice) {
  console.log(`${indice + 1}) ${nome}`);
});
// -> 1) Agatha
// -> 2) Aldo
// -> 3) Daniel
// -> 4) Raquel
