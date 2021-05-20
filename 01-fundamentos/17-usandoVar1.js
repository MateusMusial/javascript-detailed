// Com a variável "var" dentro de um bloco de código que não seja uma função,
// ele fica visível fora dos blocos.
{
  {
    {
      {
        var sera = 'Será???'
      }
    }
  }
}

console.log(sera);
// -> 'Será???'

// Quando criamos uma variável dentro do escopo de uma function ela não é visível fora.
function teste() {
  var local = 123;
  console.log(local);
}

teste();
// -> 123
// console.log(local);
// -> ReferenceError: local is not defined

/*
 * Variáveis definida com a palavra "var" temos:
 * Escopo Global
 * Escopo de Função
*/