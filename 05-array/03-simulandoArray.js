// Apartir de um objeto podemos ter uma estrutura parecida com um array.

const quaseArray = { 0: "Rafael", 1: "Ana", 2: "Bia" };
console.log(quaseArray);
// -> { '0': 'Rafael', '1': 'Ana', '2': 'Bia' }

// Definindo uma propriedade para o objeto "quaseArray", nova propriedade "toString",
//  que é uma função que retorna o valores do objeto em questão, essa função também não é listada.
Object.defineProperty(quaseArray, "toString", {
  value: function () {
    return Object.values(this);
  },
  enumerable: false,
});

// acessando atributos apartir dos colchetes
console.log(quaseArray[0]);
// -> Rafael

const meuArray = ["Rafael", "Ana", "Bia"];
console.log(quaseArray.toString(), meuArray);
// -> [ 'Rafael', 'Ana', 'Bia' ] [ 'Rafael', 'Ana', 'Bia' ]