// "Set" é uma estrutura de conjunto não indexada e que não aceita repetição

const times = new Set();
times.add("Vasco");
times.add("São Paulo").add("Palmeiras").add("Corinthians");
times.add("Flamengo");
times.add("Vasco");

console.log(times);
// -> Set(5) { 'Vasco', 'São Paulo', 'Palmeiras', 'Corinthians', 'Flamengo' }
console.log(times.size);
// -> 5
console.log(times.has("vasco")); // repare que "vasco" está com letra minúscula
// -> false
console.log(times.has("Vasco"));
// -> true

times.delete("Flamengo"); // excluindo propriedades..
console.log(times.has("Flamengo"));
// -> false

// podemos criar um set apartir de um array..
const nomes = ["Raquel", "Lucas", "Julia", "Lucas"];
const nomesSet = new Set(nomes); // repare que "Lucas" aparece duas vezes, no caso a ultima foi ignorada.
console.log(nomesSet);
// -> Set(3) { 'Raquel', 'Lucas', 'Julia' }
