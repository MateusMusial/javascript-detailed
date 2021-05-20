// O significado do "hoisting" é içar ou jogar para cima.

console.log('a =', a);
// -> a = undefined

var a = 2;

console.log('a =', a);
// -> a = 2

/* O código acima é o mesmo que:

var a;

console.log('a =', a);
// -> a = undefined

a = 2;

console.log('a =', a);
// -> a = 2

*/

// Com "let" isso não acontece, causaria um erro na primeira chamada do console.log.