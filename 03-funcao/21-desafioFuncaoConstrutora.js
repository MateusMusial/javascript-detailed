// substituimos a palavra "class" por "function"
function Pessoa(nome) {
  this.nome = nome;

  // colocamos "this" em frente do método e usamos uma função anonima
  this.falar = function () {
    console.log(`Meu nome é ${this.nome}`);
  };
}

const p1 = new Pessoa("João");
p1.falar();
// -> Meu nome é João
console.log(p1.nome);
// -> João

/*
 * Podemos criar um objeto apartir de uma função construtora, classe e uma função factory
*/