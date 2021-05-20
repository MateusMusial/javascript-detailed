// Palavra reservada, identidicador, atribuição, dado.
var a = 3;
let b = 4;

var a = 30; // podemos redeclarar uma váriavel usando "var"
b = 40;     // com "let" não podemos redeclarar a variável - caso feito, causaria um erro!

console.log(a, b);
// -> 30 40

a = 300;
b = 400;

console.log(a, b);
// -> 300 400

// ==== Constantes ====
const c = 5;
// c = 50 - não podemos reatribuir uma constante - caso feito, causaria um erro!
console.log(c);
// -> 5

/* É sempre bom trabalhar com constantes em JavaScript,
 * caso precise mudar o valor,
 * alteramos a "const" para "let"
 */
