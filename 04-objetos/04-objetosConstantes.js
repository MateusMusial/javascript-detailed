// pessoa -> aponta para o endereço de memória 123 -> {...}
const pessoa = { nome: "Joao" };
pessoa.nome = "Pedro";
console.log(pessoa);
// -> { nome: 'Pedro' }

// Tentando reatribuir pessoa a um novo objeto teremos um erro!
// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' };

// Estamos congelando o objeto "pessoa", não conseguimos mais atribuir mais nada ao objeto...
Object.freeze(pessoa);

pessoa.nome = "Maria";
pessoa.end = "Rua ABC";
delete pessoa.nome;

console.log(pessoa.nome);
// -> "Pedro"
console.log(pessoa);
// -> { nome: 'Pedro' }

// Criando um objeto constante pra nunca ser mudado....
const pessoaConstante = Object.freeze({ nome: "Joao" });
pessoaConstante.nome = "Maria";
console.log(pessoaConstante);
// -> { nome: 'Joao' }
