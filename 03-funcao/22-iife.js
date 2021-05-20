// IIFE -> Immediately Invoked Function Expression
// Expressão de Função Imediatamente Invocada

(function () {
  console.log("Será executado na hora!");
  console.log("Foge do escopo mais abrangente!");
})();
// -> "Será executado na hora!"
// -> "Foge do escopo mais abrangente!"


/*
 * Uma maneira de fugir do escopo global, tudo que estiver dentro da função
 * será executado imediatamente
*/