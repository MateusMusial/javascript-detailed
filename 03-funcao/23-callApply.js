// Duas formas diferentes de executar uma função, com ".call()" e ".apply()"
// A diferença entre "call" e "apply" é a forma como passamos os parâmetros na hora de invocar a função.

function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
  nome: "Notebook",
  preco: 4589,
  desc: 0.15,
  getPreco, // como temos uma função com o mesmo nome, a função de fora é associada dentro do objeto.
};

global.preco = 20; // caso não tivessemos atribuido essas duas propriedades
global.desc = 0.1; // no escopo global a chamada abaixo retornaria "R$ NaN"
console.log(getPreco());
// -> "R$ 18"

console.log(produto.getPreco());
// -> "R$ 3900.65"

const carro = { preco: 49990, desc: 0.2 };

console.log(getPreco.call(carro)); // Chamamos a função e passamos como contexto para execução da função o objeto "carro"
// -> "R$ 39992"
console.log(getPreco.apply(carro)); // "Apply" funciona praticamente igual a "call" acima
// -> "R$ 39992"

// A diferença entre os dois ".call()" e ".apply()"....
// A diferença é a passagem dos parâmetros..

// Primeiro passamos o contexto da chamada que no caso é o objeto "carro",
// e depois os parâmetros pra função "getpreco", "imposto" e "moeda".
console.log( getPreco.call(carro, 0.17, "$") );
// -> "$ 46790.64"

// Aqui passamos o objeto de contexto que é o "global" e os parâmetros são passados detro de um array
console.log( getPreco.apply(global, [0.17, "$"]) );
// -> "$ 21.06"
