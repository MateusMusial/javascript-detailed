function Pessoa() {
  this.idade = 0;

  const self = this; // criando uma constante com o "this"

  // veremos outro exemplo com arrow function no exercicio "08-arrowFunction.js"
  setInterval(
    function () {
      self.idade++;
      console.log(self.idade); // ai trocariamos "self.idade" por "this.idade"
    } /* .bind(this) */, // ou podemos usar o ".bind()" referenciando o próprio "this" dentro da classe. continua ↑
    1000
  );
}

new Pessoa();
// -> 1, ..apos 1 seg, 2, ..apos 1 seg, 3
