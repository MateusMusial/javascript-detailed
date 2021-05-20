const pai = { nome: "Pedro", corCabelo: "preto" };

const filha1 = Object.create(pai); // criou um novo objeto "filha1" tendo como prototype o objeto "pai"
filha1.nome = "Ana";
console.log(filha1.corCabelo);
// -> "preto"

// segundo parâmetro podemos criar outros atributos com suas respectivas configurações
const filha2 = Object.create(pai, {
  nome: { value: "Bia", writable: false, enumerable: true },
});

console.log(filha2.nome);
// -> "Bia"
filha2.nome = "Carla"; // não vai ser possivel mudar pois na linha 10 "writable: false"
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);
// -> "Bia tem cabelo preto"

console.log(Object.keys(filha1)); // não é listado propriedades herdadas
// -> [ 'nome' ]
console.log(Object.keys(filha2)); // vai ser listado pois na linha 10 "enumerable: true"
// -> [ 'nome' ]

for (let key in filha2) {
  // a "key" pertence ao proprio objeto ? true : false
  filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`);
}
// -> "nome"
// -> "Por herança: corCabelo"

/*
 * Para saber se determinado atribuito pertence ao próprio objeto, ou se
 * ele veio por herança usamos ".hasOwnProperty()"
*/