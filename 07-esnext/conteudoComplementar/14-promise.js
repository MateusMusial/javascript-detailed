// Uma Promisse só considera um valor;

const primeiroElemento = (arrayOuString) => arrayOuString[0];
const tudoMaiusculo = (string) => string.toUpperCase();

let promessa = new Promise((resolve) => {
  resolve(["Mateus", "Amanda", "Bia", "Marcelo"]);
});

promessa
  .then(primeiroElemento)
  .then(tudoMaiusculo)
  .then(console.log);

// ========== Exemplo 2 =============

const somarValor = (arrayValor) => {
  return arrayValor.reduce((acumulador, atual) => (atual += acumulador), 0);
}
const valorMonetario = (valor) => {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

let valor = new Promise((resolve) => resolve([2.5433, 43.63, 12.609]));

valor
  .then(somarValor)
  .then(valorMonetario)
  .then(console.log);
