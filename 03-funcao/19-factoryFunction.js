function criarProduto(nome, preço) {
  return { // retornando um objeto literal
    nome, // nesse caso não precisamos escrever "nome: nome"
    preço,
    desconto: 0.1,
  };
}

console.log(criarProduto("Notebook", 2199.49));
// -> { nome: 'Notebook', 'preço': 2199.49, desconto: 0.1 }
console.log(criarProduto("iPad", 1199.49));
// -> { nome: 'iPad', 'preço': 1199.49, desconto: 0.1 }
