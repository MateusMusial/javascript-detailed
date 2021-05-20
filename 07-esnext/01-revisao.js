// let e const
{
  var a = 2;
  let b = 3;
  console.log(b);
  // -> 3
}
console.log(a); // "var" não tem escopo de bloco
// -> 2

// Template String
const produto = "iPad";
console.log(`${produto} é caro!`);
// -> "iPad é caro!"

// Destructuring - tirar de dentro de uma estrutura alguma coisa
const [l, e, ...tras] = "Cod3r";
console.log(l, e, tras);
// -> C o [ 'd', '3', 'r' ]

// podemos pular elementos
const [x, , y] = [1, 2, 3];
console.log(x, y);
// -> 1 3

// tirou "idade" e atribuiu a variável "i"
const { idade: i, nome } = { nome: "Ana", idade: 9 };
console.log(i, nome);
// -> 9 Ana
