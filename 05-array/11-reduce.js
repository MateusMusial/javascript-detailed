// A função callback em ".reduce()" é aplicada a todos os elementos do array um após o outro
// e “carrega” seu resultado para a próxima chamada.

/*
 * let value = arr.reduce(function(accumulator, item, index, array) {
 *   // ...
 * }, [initial]);
*/

const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "Ana", nota: 8.7, bolsista: true },
];

// É muito importânte sempre usar ".map()" para pegar apenas os elementos que queremos trabalhar
console.log(alunos.map((a) => a.nota));
// -> [ 7.3, 9.2, 9.8, 8.7 ]

const resultado = alunos
  .map((a) => a.nota)
  .reduce(function (acumulador, atual) {
    console.log(`O resultado anterior ${acumulador} é somado com ${atual}`);
    return acumulador + atual;
  }, 0 /* <- Podemos ou não passar o valor inicial */);
// -> O resultado anterior 0 é somado com 7.3
// -> O resultado anterior 7.3 é somado com 9.2
// -> O resultado anterior 16.5 é somado com 9.8
// -> O resultado anterior 26.3 é somado com 8.7

console.log(resultado); // O "resultado" é a soma de todas as notas do array
// -> 35
