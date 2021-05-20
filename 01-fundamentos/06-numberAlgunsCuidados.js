console.log(7 / 0);
// -> Infinity -> um tipo especial de number

console.log("10" / 2); // strings são convertidas automáticamente para number
// -> 5

console.log('3' + 2);
// -> "32" -> string ganha com o operador +!

console.log("Show" * 2);
// -> NaN -> tipo especial de number (Not a Number)

console.log(0.1 + 0.7);
// -> 0.7999999999999999 -> imprecisão com números fracionados

console.log( (10.345).toFixed(2) );
// -> "10.35" -> quando chamamos literais usamos parênteses