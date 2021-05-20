const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];

// =============  .pop()  ===================

pilotos.pop(); // Remove o último elemento do array, no caso "Massa"
console.log(pilotos);
// -> [ 'Vettel', 'Alonso', 'Raikkonen' ]

// =============  .push()  ===================

pilotos.push("Verstappen"); // Adicionamos elementos no fim do array.
console.log(pilotos);
// -> [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]

// =============  .shift()  ===================

pilotos.shift(); // remove o primeiro elemento do array, no caso "Vettel"
console.log(pilotos);
// -> [ 'Alonso', 'Raikkonen', 'Verstappen' ]

// =============  .unshift()  ===================

pilotos.unshift("Hamilton"); // Adiciona elemento no começo do array o elemento
console.log(pilotos);
// -> [ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]

// =============  Outros Métodos  ===================

// splice pode adicionar e remover elementos

// adicionar elementos ....
// apartir do indice 2 não removemos nenhum elemento e addicionamos "Bottas" e "Massa"
pilotos.splice(2, 0, "Bottas", "Massa");
console.log(pilotos);
// -> [ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]

// remover elementos ....
// Apartir do indice 3 removemos um elemento, no caso "Massa".
pilotos.splice(3, 1);
console.log(pilotos);
// -> [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]

// =============  .slice()  ===================

// retorna um novo array como um "pedaço"
// O método ".slice()" retorna um novo array
const algunsPilotos1 = pilotos.slice(2); // no caso retornou um novo array apartir do indice 2
console.log(algunsPilotos1);
// -> [ 'Bottas', 'Raikkonen', 'Verstappen' ]

// retorna um novo array apartir do indice 1 até o indice 4 (menos o 4) - indice 1, 2, 3
const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);
// -> [ 'Alonso', 'Bottas', 'Raikkonen' ]
