const ferrari = {
  modelo: "F40",
  velMax: 324,
};

const volvo = {
  modelo: "V40",
  velMax: 200,
};

console.log(ferrari.prototype); // objetos nao tem o atributo ".prototype"
// -> undefined
console.log(ferrari.__proto__); // objetos tem apenas o atributo ".__proto__"
// -> [Object: null prototype] {}
console.log(ferrari.__proto__ === Object.prototype);
// -> true
console.log(volvo.__proto__ === Object.prototype);
// -> true
console.log(Object.prototype.__proto__ === null);
// -> true

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto);
// -> function function
console.log(Object.prototype, MeuObjeto.prototype);
// -> [Object: null prototype] {} {}
