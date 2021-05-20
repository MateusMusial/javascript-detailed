// Desestruturando um objeto como parâmetro de uma função...
function rand({min = 0, max = 1000}) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

const valores = {min: 40, max: 50};
console.log( rand(valores) );
// -> valor random entre 40 e 50

console.log( rand({min: 955}) );
// -> valor random entre 955 e 1000

console.log( rand({}) );
// -> valor random entre 0 e 1000

console.log( rand() );
// -> TypeError: Cannot read property 'min' of undefined