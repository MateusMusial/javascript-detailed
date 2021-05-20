// JSON é usado para dados, para interoperabilidade entre sistemas.

const obj = {
  a: 1,
  b: 2,
  c: 3,

  soma() {
    return a + b + c;
  },
};

// "JSON.stringify()" - usado para gerar formato JSON.
// Repare que a função "soma()" foi excluida do JSON.
console.log(JSON.stringify(obj));
// -> {"a":1,"b":2,"c":3}

// "JSON.parse()" - usado para transformar um JSON para Objeto em JS.
// Todo atributo deve ser delimitado por aspas dulpas ""
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'));
// -> { a: 1, b: 2, c: 3 } -> agora temos um objeto gerado apartir de um JSON.

console.log(
  JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')
);
// -> { a: 1.7, b: 'string', c: true, d: {}, e: [] }

// Lembre-se....
// strings e atributos sempre em aspas duplas
// numeros apenas numeros
// boolean apenas boolean
// Objetos e arrays apenas objetos e arrays

// Formatos não aceitavel ....
// "{ a: 1, b: 2, c: 3 }" -> faltando aspas duplas nos atributos
// "{ 'a': 1, 'b': 2, 'c': 3 }" -> não podemos usar aspas simples nos atributos
