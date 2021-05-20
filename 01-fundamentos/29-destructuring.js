// Operador de desestruturação, retira de um objeto ou array apenas o dado que vc quer.

const pessoa = {
  nome: 'Ana',
  idade: 18,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1290,
  }
};

// Tire "nome" e "idade" do objeto "pessoa".
const { nome, idade } = pessoa;
console.log(nome, idade);
// -> Ana 18

// Tire "nome" e atribua a variável "n" e "idade" e atribua a variável "i" do objeto "pessoa"
const { nome: n, idade: i } = pessoa;
console.log(n, i);
// -> Ana 18

// Tire "sobrenome" e "bemHumorada" caso não haja essa propriedade use por padrão "true", de "pessoa".
const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);
// -> undefined true

// Retirando de objetos aninhados
const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);
// -> Rua ABC 1290 undefined

// Cuidado com dados inexistentes
const { conta: {ag, num} } = pessoa;
console.log(ag, num);
// -> TypeError: Cannot read property 'ag' of undefined