const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }',
];

// Retornar uma array apenas com os preços

// Primeiro, passamos cada valor de JSON para objeto...
const paraObjeto = carrinho.map( (json) => JSON.parse(json) );

console.log(paraObjeto);
// -> [
// ->  { nome: 'Borracha', preco: 3.45 },
// ->  { nome: 'Caderno', preco: 13.9 },
// ->  { nome: 'Kit de Lapis', preco: 41.22 },
// ->  { nome: 'Caneta', preco: 7.5 }
// -> ]

// Segundo, pegamos apenas o ".preco" de cada objeto que no caso é o valor contido no array.
const preco = objCarrinho.map( (produto) => produto.preco );

console.log(preco);
// -> [ 3.45, 13.9, 41.22, 7.5 ]
