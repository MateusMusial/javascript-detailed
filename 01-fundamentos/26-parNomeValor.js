// par "nome: valor"
const saudacao = 'Olá'; // contexto léxico 1

function exec() {
  const saudacao = 'Eai'; // contexto léxico 2
  return saudacao;
}

// Objetos são grupos aninhados de pares "nome: valor"
const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereço: {
    logradouro: 'Rua Muito Legal',
    numero: 1234,
  }
};

console.log(saudacao);
// -> "Olá"
console.log( exec() );
// -> "Eai"
console.log(cliente);
// -> {nome: 'Pedro', idade: 32, peso: 90, 'endereço': { logradouro: 'Rua Muito Legal', numero: 1234 }}