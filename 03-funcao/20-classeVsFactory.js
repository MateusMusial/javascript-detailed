// Criando apartir de classes
// Aqui o "this" pode variar de acordo com que chama a função.
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
}

const p1 = new Pessoa("João");
p1.falar();
// -> "Meu nome é João"

// Criando com um function factory
// Aqui o "this" é estático por causa da arrow function, e sempre vai se lembrar do nome.
const criarPessoa = (nome) => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`),
  };
};

const p2 = criarPessoa("João");
p2.falar();
// -> "Meu nome é João"
