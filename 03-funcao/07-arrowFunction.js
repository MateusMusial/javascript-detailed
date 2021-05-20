// Expressão de função - uma função declarada dentro de uma variável.
let dobro = function (a) {
  return 2 * a;
};

// Arrow Function só funciona com um expressão de função
// se usarmos os blocos "{}" temos que explicitar o "return"
dobro = (a) => {
  return 2 * a;
};

dobro = (a) => 2 * a; // return implícito
console.log(dobro(Math.PI));
// -> 6.283185307179586

let ola = function () {
  return "Olá";
};

ola = () => "Olá"; // sempre é bom usarmos os "()"
ola = (_) => "Olá"; // possui um param
console.log(ola());
// -> "Olá"

/*
 * Arrow Functions tem um "this" constante, que não muda seu contexto léxico.
 * ou seja "this" é associado ao contexto léxico (contexto que a função foi escrita) e não varia.
*/