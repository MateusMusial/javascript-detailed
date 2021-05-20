// Desestruturando um array como parâmetro de uma função...
function rand([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min];
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

console.log( rand( [50, 40] ) );
// -> numero random entre 40 e 50

console.log( rand( [992] ) );
// -> numero random entre 992 e 1000

console.log( rand( [, 10] ) );
// -> numero rando entre 0 e 10

console.log( rand() );
// -> TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))