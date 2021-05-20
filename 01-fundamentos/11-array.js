const valores = [7.7, 8.9, 6.3, 9.2];

console.log(valores[0], valores[3]);
// -> 7.7 9.2
console.log(valores[4]);
// -> undefined

valores[4] = 10;
console.log(valores[4]);
// -> 10

/*
 * Quando adicionamos posições a mais no array
 * o JavaScript cria posições vazias ente os elementos.
 *
 * valores[10] = 9.9;
 * console.log(valores);
 * // -> [ 7.7, 8.9, 6.3, 9.2, 10, <5 empty items>, 9.9 ]
*/

console.log(valores.length); // retorna o número de elementos do array
// -> 5

// Inserir elementos no final do array .push()
valores.push( {id: 3}, false, null, 'teste' );
console.log(valores);
// -> [7.7, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null, 'teste']

// Retirar valores
console.log( valores.pop() ); // o valor 'teste' foi retirado e retornado.
// -> 'teste'

delete valores[0]; // retira itens da posição especificada

console.log(valores);
// -> [ <1 empty item>, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null ]

console.log(typeof valores);
// -> object