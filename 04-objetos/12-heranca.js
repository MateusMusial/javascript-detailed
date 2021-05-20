// Todas as "functions" abaixo tem ".prototype"
console.log(typeof String);
// -> function
console.log(typeof Array);
// -> function
console.log(typeof Object);
// -> function

// Strings....
String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

console.log("Escola Cod3r".reverse());
// -> "r3doC alocsE"

// Arrays.....
Array.prototype.first = function () {
  return this[0];
};

console.log([1, 2, 3, 4, 5].first());
// -> 1
console.log(["a", "b", "c"].first());
// -> a

// Podemos substiturir funções existentes como o ".toString()", mas isso não é aconselhavel.
String.prototype.toString = function () {
  return "Lascou tudo";
};

console.log("Escola Cod3r".reverse());
// -> "odut uocsaL"
