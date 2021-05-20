// valor monetários
function real(partes, ...valores) {
  const resultado = [];
  valores.forEach((valor, indice) => {
    valor = isNaN(valor) ? valor : `R$ ${valor.toFixed(2)}`;
    resultado.push(partes[indice], valor); // alternando entre parte e valor conseguimos remontar a string inteira
  });
  return resultado.join("");
}

const preco = 29.9;
const precoParcela = 11;
console.log(real`1x de ${preco} ou 3x de ${precoParcela}.`);
// -> "1x de R$ 29.90 ou 3x de R$ 11.00"


// outra forma...
const valor = 15.56753;
console.log( valor.toLocaleString('pt-BR', {style:'currency', currency:'BRL'}) );
// -> R$ 15,57