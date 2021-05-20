let valor; // não inicializada
console.log(valor);
// -> undefined

valor = null; // ausência de valor
console.log(valor);
// -> null
// console.log( valor.toString() );
// -> TypeError: Cannot read property 'toString' of null

const produto = {};
console.log(produto.preco);
// -> undefined
console.log(produto);
// -> {}

produto.preco = 3.50
console.log(produto);
// -> { preco: 3.5 }

produto.preco = undefined; // evite atribuir undefined
console.log( Boolean(produto.preco) );
// -> false
// delete produto.preco; // -> forma correta de tirar um atributo de um objeto
console.log(produto);
// -> { preco: undefined }

produto.preco = null;
console.log( Boolean(produto.preco) );
// -> false
console.log(produto);
// -> { preco: null }