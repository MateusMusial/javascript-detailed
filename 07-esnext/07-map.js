// Estrutura "chave: valor" que aceita um objeto, número ou função como "chave"
// Não podemos ter "chaves" duplicadas

const tecnologias = new Map();
tecnologias.set("react", { framework: false });
tecnologias.set("angular", { framework: true });

console.log(tecnologias.react);
// -> undefined
console.log(tecnologias.get("react").framework); // o objeto é retornado apartir do ".get()"
// -> false

const chavesVariadas = new Map([
  [function () {}, "Função"],
  [{}, "Objeto"],
  [123, "Número"],
]);

chavesVariadas.forEach((vl, ch) => {
  console.log(ch, vl);
});
// -> [Function (anonymous)] Função
// -> {} Objeto
// -> 123 Número

console.log(chavesVariadas.has(123)); // está ou não contido no Map?
// -> true

chavesVariadas.delete(123); // removendo elementos
console.log(chavesVariadas.has(123));
// -> false

console.log(chavesVariadas.size); // atributo ".size" pra dizer quanto elementos temos no Map
// -> 2

chavesVariadas.set(123, "a");
chavesVariadas.set(123, "b"); // sobrescreveu o ".set" acima
chavesVariadas.set(456, "b");
console.log(chavesVariadas);
// -> Map(4) {
// ->  [Function (anonymous)] => 'Função',
// ->  {} => 'Objeto',
// ->  123 => 'b',
// ->  456 => 'b'
// -> }
