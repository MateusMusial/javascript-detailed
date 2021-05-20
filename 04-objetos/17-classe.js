class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome;
  }
}

// Definindo a classe "Pai" tem como prototype a classe "Avo"
class Pai extends Avo {
  constructor(sobrenome, profissao = "Professor") {
    super(sobrenome); // chama o construtor da "super" classe, no caso a classe "Avo"
    this.profissao = profissao; // O objeto instanciado tem o atributo "profissao", no caso "Pai"
  }
}

class Filho extends Pai {
  constructor() {
    super("Silva");
  }
}

const filho = new Filho();
console.log(filho);
// -> Filho { sobrenome: 'Silva', profissao: 'Professor' }
