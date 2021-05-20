const nome = 'Mateus';

const concatenacao = 'Olá ' + nome + '!';

// template string suporta as tabulações e quebras de linha
const template = `
  Olá
  ${nome}!`
;

console.log(concatenacao);
// -> "Olá Mateus!"

console.log(template);
// ->   Olá
//      Mateus!

// expressões...
console.log(`1 + 1 = ${1 + 1}`);
// -> "1 + 1 = 2"

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);
// -> Ei... CUIDADO!
