console.log(typeof Array, typeof new Array(), typeof []);
// -> function object object

let aprovados = new Array("Bia", "Carlos", "Ana"); // Maneira de criar um array
console.log(aprovados);
// -> [ 'Bia', 'Carlos', 'Ana' ]

// ================= Exemplo 2 ======================

aprovados = ["Bia", "Carlos", "Ana"]; // melhor maneira de ciar um array (literal).
console.log(aprovados[0]);
// -> "Bia"
console.log(aprovados[1]);
// -> "Carlos"
console.log(aprovados[2]);
// -> "Ana"
console.log(aprovados[3]);
// -> undefined

aprovados[3] = "Paulo"; // podemos adicionar elementos com o colchetes e o indice
aprovados.push("Abia"); // ou usando ".push()" nesse caso o elemento é add no fim do array
console.log(aprovados.length); // saber o coprimento do array
// -> 5

aprovados[9] = "Rafael"; // o array cria um espaço e coloca "Rafael" na posição indicada
console.log(aprovados.length);
// -> 10
console.log(aprovados[8] === undefined); // da posição 5 até a 8 são possições "undefined" vazias.
// -> true

console.log(aprovados);
// -> [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia', <4 empty items>, 'Rafael' ]

aprovados.sort(); // essa função ordena o array, no caso em ordem alfabética.
console.log(aprovados);
// -> [ 'Abia', 'Ana', 'Bia', 'Carlos', 'Paulo', 'Rafael', <4 empty items> ]

delete aprovados[1]; // excluir quem esta ná posição indexada

console.log(aprovados[1]);
// -> undefined
console.log(aprovados[2]);
// -> "Bia"

// ==================== Exemplo 3 =======================

aprovados = ["Bia", "Carlos", "Ana"]; // Redeclarando o array para um novo exemplo
aprovados.splice(1, 1); // apartir do indice 1 remove 1 elemento, no caso "Carlos"
console.log(aprovados);
// -> [ 'Bia', 'Ana' ]

/*
 * Para remover e adicionar novos elemento com a função ".splice" passamos parametros para o mesmo
 * No caso ficaria assim:
 * aprovados.splice(1, 1, "Mateus", "Amanda");
 * apartir do indice 1 removemos um elemento e adicionamos outros dois passados no caso "Mateus" e "Amanda"
*/