function MeuObjeto() {}
console.log(MeuObjeto.prototype);
// -> {}

// Apartir de uma função construtora, todos os objetos criados apontam pro mesmo prototype
const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();
console.log(obj1);
// -> MeuObjeto {}
console.log(obj1.__proto__ === obj2.__proto__);
// -> true
console.log(MeuObjeto.prototype === obj1.__proto__);
// -> true

// ".prototype" é da função e o "__proto__" é a referência do objeto.
MeuObjeto.prototype.nome = "Anônimo";
MeuObjeto.prototype.falar = function () {
  console.log(`Bom dia! Meu nome é ${this.nome}!`);
};

obj1.falar();
// -> "Bom dia! Meu nome é Anônimo!"

obj2.nome = "Rafael";
obj2.falar();
// -> "Bom dia! Meu nome é Rafael!"

const obj3 = {};
// atribuindo manualmente o prototype, saindo de "Object.prototype" para "MeuObjeto.prototype"
obj3.__proto__ = MeuObjeto.prototype;
obj3.nome = "Obj3";
obj3.falar();
// -> "Bom dia! Meu nome é Obj3!"

// Resumindo a loucura...
console.log(new MeuObjeto().__proto__ === MeuObjeto.prototype);
// -> true
console.log(MeuObjeto.__proto__ === Function.prototype);
// -> true
console.log(Function.prototype.__proto__ === Object.prototype);
// -> true
console.log(Object.prototype.__proto__ === null);
// -> true
