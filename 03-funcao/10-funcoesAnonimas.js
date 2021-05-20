// Uma função anônima é uma função sem nome

// armazenando uma função anonima dentro de uma variável
const soma = function (x, y) {
  return x + y;
};

const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b));
};

imprimirResultado(3, 4);
// -> 7
imprimirResultado(3, 4, soma);
// -> 7
imprimirResultado(3, 4, function (x, y) {
  return x - y;
});
// -> -1
imprimirResultado(3, 4, (x, y) => x * y);
// -> 12

// Podemos usar funçoes anonimas dentro de objetos como métodos.
const pessoa = {
  falar: function () { // podemos omitir ": function" deixando apenas "falar() {}"
    console.log("Opa");
  },
};

pessoa.falar();
// -> "Opa"
