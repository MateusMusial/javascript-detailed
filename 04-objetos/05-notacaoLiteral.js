const a = 1;
const b = 2;
const c = 3;

// se quisermos mudar o nome propriedade podemos escolher a opção abaixo
const obj1 = { a: a, b: b, c: c };
// assume automaticamente o nome da "const" com o atributo criado dentro do objeto
const obj2 = { a, b, c };
console.log(obj1, obj2);
// -> { a: 1, b: 2, c: 3 } { a: 1, b: 2, c: 3 }

// Criar um atributo apartir de uma variável..
const nomeAttr = "nota";
const valorAttr = 7.87;

const obj3 = {};
obj3[nomeAttr] = valorAttr;
console.log(obj3);
// -> { nota: 7.87 }

const obj4 = { [nomeAttr]: valorAttr };
console.log(obj4);
// -> { nota: 7.87 }

const obj5 = {
  funcao1: function () { // forma antiga
    // ...
  },
  funcao2() { // forma mais atual
    // ...
  },
};
console.log(obj5);
// -> { funcao1: [Function: funcao1], funcao2: [Function: funcao2] }
