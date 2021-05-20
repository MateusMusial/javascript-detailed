// "Object.preventExtensions()" - vai proibir que no objeto seja adicionando novos atributos (chave: valor).
// Podemos deletar atributos mas não adicionar..
const produto = Object.preventExtensions({
  nome: "Qualquer",
  preco: 1.99,
  tag: "promoção",
});

// "Object.isExtensible()" usado para saber se o objeto é estendivel ou não
console.log("Extensível:", Object.isExtensible(produto));
// -> Extensível: false

produto.nome = "Borracha"; // foi modificado
produto.descricao = "Borracha escolar branca"; // não foi adicionado pois o objeto não é estendivel.
delete produto.tag; // conseguimos deletar
console.log(produto);
// -> { nome: 'Borracha', preco: 1.99 }

// "Object.seal()" - NÃO conseguimos adicionar novos atributos, excluir, mas conseguimos modificar valores
const pessoa = {
  nome: "Juliana",
  idade: 35,
};
Object.seal(pessoa);
console.log("Selado:", Object.isSealed(pessoa));
// -> true

pessoa.sobrenome = "Silva"; // não conseguimos adicionar novos atributos
delete pessoa.nome; // não conseguimos deletar
pessoa.idade = 29; // conseguimos sim alterar valores..
console.log(pessoa);
// -> { nome: 'Juliana', idade: 29 }

// Object.freeze = selado + valores constantes
// Não conseguimos incluir novos valores, não conseguimos excluir chaves do objeto, e nem modificar os dados.
