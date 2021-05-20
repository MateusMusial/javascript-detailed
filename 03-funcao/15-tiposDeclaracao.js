console.log( soma(3, 4) );
// -> 7

// function declaration - quando a usamos podemos chamar ela em qualquer lugar do código, no caso, acima.
function soma(x, y) {
  return x + y;
}

// function expression - sempre temos que chamar a função depois da sua declaração
const sub = function (x, y) {
  return x - y;
};
console.log(sub(3, 4));
// -> -1

// named function expression
const mult = function mult(x, y) {
  return x * y;
};
console.log(mult(3, 4));
// -> 12
