console.log('1' == 1);
// -> true
console.log('1' === 1);
// -> false
console.log('3' != 3);
// -> false
console.log('3' !== 3);
// -> true

console.log(3 > 2);
// -> true
console.log(3 < 2);
// -> false
console.log(3 <= 2);
// -> false
console.log(3 >= 2);
// -> true

const d1 = new Date(0);
const d2 = new Date(0);
console.log(d1 === d2);
// -> false
console.log(d1 == d2);
// -> false
console.log(d1.getTime() === d2.getTime());
// -> true


console.log(undefined == null);
// -> true
console.log(undefined === null);
// -> false

/*
 * Procurar sempre usar a igualdade estrita "==="
*/