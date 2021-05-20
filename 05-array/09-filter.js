// Usamos o ".filter()" para filtrar um array e renornar apenas a lógica que queremos.
// Cria um novo array com o filtro aplicado

const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad Pro", preco: 4199, fragil: true },
  { nome: "Copo de Vidro", preco: 12.49, fragil: true },
  { nome: "Copo de Plástico", preco: 18.99, fragil: false },
];

console.log(
  produtos.filter(function (p) {
    return false; // "false" o nosso array fica vazio
  })
);
// -> []
// caso contrário na linha 13 fosse "true" retornaria todos os elementos do array

// aplicamos um filtro para retornar produtos com valores maior que "500"
const isMore500 = (produto) => produto.preco >= 500;
// aplicamos outro filtro para retornar apenas se o "produto.fragil: true"
const isFragil = (produto) => produto.fragil;

const result = produtos.filter(isMore500).filter(isFragil);

console.log(result);
// -> [
// ->  { nome: 'Notebook', preco: 2499, fragil: true },
// ->  { nome: 'iPad Pro', preco: 4199, fragil: true }
// -> ]

console.log(produtos); // repare que o array original não foi modificado
// -> [
// ->  { nome: 'Notebook', preco: 2499, fragil: true },
// ->  { nome: 'iPad Pro', preco: 4199, fragil: true },
// ->  { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
// ->  { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
// -> ]


/*
 * No ".map()" o resultado era o elemento transformado, já no ".filter()" o resultado é "true" ou "false"
 * ou seja filtrar ou não filtrar o elemento.
*/