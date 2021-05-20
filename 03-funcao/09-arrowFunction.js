let comparaComThis = function (param) {
  console.log(this === param);
};

comparaComThis(global); // no caso "this" aponta para o objeto "global" no runtime do node
// -> true

const obj = {};
comparaComThis = comparaComThis.bind(obj); // usando o ".bind()"
comparaComThis(global);
// -> false
comparaComThis(obj); // "this" agora aponta para o "obj" por conta do ".bind()"
// -> true

let comparaComThisArrow = (param) => console.log(this === param);
comparaComThisArrow(global);
// -> false
comparaComThisArrow(module.exports); // na arrow function o "this" ta apontando para dentro do módulo do node
// -> true

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj); // não conseguimos mudar o "this" da arrow function
// -> false
comparaComThisArrow(module.exports);
// -> true
