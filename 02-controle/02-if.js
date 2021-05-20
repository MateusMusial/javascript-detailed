// Bloco "if" sempre retorna a primeira sentença apos a declaração, mas o ideal é sempre usar "{}"
function teste1(num) {
  if (num > 7)
    console.log(num);
    console.log('Final');
}

teste1(6);
// -> Final
teste1(8);
// -> 8
// -> Final

function teste2(num) {
  if (num > 7); { // cuidado com o ';', não usar em estruturas de controle
    console.log(num);
  }
}

teste2(6);
// -> 6
teste2(8);
// -> 8
