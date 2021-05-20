// Implementando nosso proprio ".filter()"

Array.prototype.filter2 = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) { // se a função "callback" retornar "true"...
      newArray.push(this[i]);         // o elemento é adicionado ao novo array
    }
  }
  return newArray;
};

const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad Pro", preco: 4199, fragil: true },
  { nome: "Copo de Vidro", preco: 12.49, fragil: true },
  { nome: "Copo de Plástico", preco: 18.99, fragil: false },
];

const isMore500 = (produto) => produto.preco >= 500;
const isFragil = (produto) => produto.fragil;

const result = produtos.filter(isMore500).filter(isFragil);

console.log(result);
// -> [
// ->  { nome: 'Notebook', preco: 2499, fragil: true },
// ->  { nome: 'iPad Pro', preco: 4199, fragil: true }
// -> ]