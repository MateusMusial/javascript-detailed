for (let i = 0; i < 10; i++) {
  console.log(i);
  // -> 0, 1 ..... 9
}

console.log('i =', i);
// -> ReferenceError: i is not defined

/*
 * Com o "let" NÃO podemos acessar a variável fora do loop.
*/