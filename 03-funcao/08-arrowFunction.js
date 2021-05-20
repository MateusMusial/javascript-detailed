function Pessoa() {
  this.idade = 0;

  // O "this" aponta pra "pessoa", as arrow function o "this" não varia de acordo com quem ta chamando.
  setInterval(() => {
    this.idade++;
    console.log(this.idade);
  }, 1000);
}

new Pessoa();
