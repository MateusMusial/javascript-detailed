var numero = 1;
{
  let numero = 2;
  console.log('Dentro =', numero);
  // -> Dentro = 2
}
console.log('Fora =', numero);
// -> Fora = 1

/*
 * Variáveis definida com a palavra "let" temos:
 * Escopo Global
 * Escopo de Função
 * Escopo de Bloco
*/