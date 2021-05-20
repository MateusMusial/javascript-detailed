const pessoa = {
  nome: "Rebeca",
  idade: 2,
  peso: 13,
};

console.log(Object.keys(pessoa)); // retorna um array com todas as "chaves" do objeto
// -> [ 'nome', 'idade', 'peso' ]
console.log(Object.values(pessoa)); // retorna um array todos os "valores" do objeto
// -> [ 'Rebeca', 2, 13 ]
console.log(Object.entries(pessoa)); // retorna um array de array com "chave, valor"
// -> [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]

// Usando o destructuring "[chave, valor]" podemos iterar sobre cada array passado por ".entries()"
Object.entries(pessoa).forEach( ([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});
// -> nome: Rebeca
// -> idade: 2
// -> peso: 13

// Definir propriedades do objeto...
Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: true, // a propriedade pode ser listada?
  writable: false, // a propriedade pode ser modificada?
  value: "01/01/2019", // atribuindo o valor...
});
// existe “configurable: false" isso faz com que a propriedade não possa ser deletada.

pessoa.dataNascimento = "01/01/2017"; // tentando sobrescrever a propriedade mas o "writable: false" não deixa
console.log(pessoa.dataNascimento);   // congelou especificamente essa propriedade e não o valor inteiro
// -> 01/01/2019

console.log(Object.keys(pessoa));
// -> [ 'nome', 'idade', 'peso', 'dataNascimento' ]
// listou "dataNascimento" pois na linha 24 "enumerable: true", caso contrario não listaria.

// Object.assign (ECMAScript 2015)...
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
// Copia todas as propriedades de "o1" e "o2" para "dest" e atribui a "const obj"
// mescla os três objetos (sobrescreve valores existentes de propriedade no "dest", caso da propriedade "a")
const obj = Object.assign(dest, o1, o2);

console.log(obj);
// -> { a: 4, b: 2, c: 3 }

Object.freeze(obj); // congela o objeto
obj.c = 1234; // não vai alterar o valor

console.log(obj);
// -> { a: 4, b: 2, c: 3 }