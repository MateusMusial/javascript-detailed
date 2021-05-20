// Implementando nosso proprio ".map()"

// Em "Array.prototype.map2" criamos uma função que recebe uma função "callback" como parâmetro
// Criamos um "newArray" percorremos o this.array com o laço "for" dando um ".push()" no "newArray" e chamando
// a função "callback" para cada elemento do this.array
Array.prototype.map2 = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }',
];

// Retornar um array apenas com os preços

const paraObjeto = (json) => JSON.parse(json);
const apenasPreco = (produto) => produto.preco;

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco);
console.log(resultado);
// -> [ 3.45, 13.9, 41.22, 7.5 ]
