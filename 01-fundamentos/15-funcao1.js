// Função sem retorno...
function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);
// -> 5
imprimirSoma(2);
// -> NaN
imprimirSoma(2, 10, 4, 6, 14);
// -> 12
imprimirSoma();
// -> NaN

// Função com retorno....
function soma(a, b = 1) { // o parâmetro "b" recebe um valor padrão caso não seja passado nada.
  return a + b;
}

console.log( soma(2, 3) );
// -> 5
console.log( soma(2) );
// -> 3
console.log( soma() );
// -> NaN