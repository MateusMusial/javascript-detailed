var numero = 1;
{
  var numero = 2;
  console.log('Dentro =', numero);
  // -> Dentro 2
}
console.log('Fora =', numero);
// -> Fora 2

/*
 * A declaração "var" na linha 3 acaba sobrescrevendo a declaração da linha 1.
*/

