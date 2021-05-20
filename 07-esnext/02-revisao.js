// Arrow Function
const soma = (a, b) => a + b;
console.log(soma(2, 3));
// -> 5

// Arrow Function (this) - está associado ao local o qual a função foi escrita.
const lexico1 = () => console.log(this === module.exports); // "this" sempre vai ser "module.exports"
const lexico2 = lexico1.bind({});

lexico1();
// -> true
lexico2();
// -> true

// parametro default
function log(texto = "Node") {
  console.log(texto);
}

log(); // assumiu o valor padrão..
// -> "Node"
log("Sou mais forte");
// -> "Sou mais forte"

// operador rest ou spred
function total(...numeros) {
  let total = 0;
  numeros.forEach((n) => (total += n));
  return total;
}
console.log(total(2, 3, 4, 5));
// -> 14
