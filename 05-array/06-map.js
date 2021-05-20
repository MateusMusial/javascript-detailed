// ".map()" serve para fazer uma transformação no array
// Mapear um array para um outro array do mesmo tamanho, mas com os dados transformados

const nums = [1, 2, 3, 4, 5];

// Criando um novo array "resultados" com o dobro dos valores do array original "nums"
// a funçao "callback" de ".map()" pode receber três parametros: valor, indice e o próprio array
let resultado = nums.map(function (e) {
  return e * 2; // uma função "callback" de ".map()" sempre tem que ter um retorno
});

console.log(resultado);
// -> [ 2, 4, 6, 8, 10 ]

console.log(nums); // o array original não foi modificado
// -> [ 1, 2, 3, 4, 5 ]

// criamos três funções....
const soma10 = (e) => e + 10;
const triplo = (e) => e * 3;
const paraDinheiro = (e) => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`;

// podemos chamar o ".map()" de forma encadeada...
resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);
// -> [ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]

console.log(nums); // o array original não foi modificado
// -> [ 1, 2, 3, 4, 5 ]