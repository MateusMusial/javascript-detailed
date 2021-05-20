const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

// Para cada elemento ele chama a função passada por parâmetro
// Na função temos o "nome" e o "indice" que será impresso no "console"
aprovados.forEach(function (nome, indice) {
  console.log(`${indice + 1}) ${nome}`);
});
// -> 1) Agatha
// -> 2) Aldo
// -> 3) Daniel
// -> 4) Raquel

// Nesse exemplo usamos uma arrow function apenas com o nome dos elementos.
aprovados.forEach((nome) => console.log(nome));
// -> Agatha
// -> Aldo
// -> Daniel
// -> Raquel

// Podemos também usar uma function expression e usar no ".forEach()"
const exibirAprovados = (aprovado) => console.log(aprovado);
aprovados.forEach(exibirAprovados);
// -> Agatha
// -> Aldo
// -> Daniel
// -> Raquel

/*
 * Existem três parametros que podemos passar para a função callback em ".forEach()":
 * - valor, indice e o próprio array.
*/