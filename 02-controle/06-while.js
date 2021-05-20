// Mais usando quando temos uma quantidade de repetição indeterminada.

function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}


let opcao = 0;
while (opcao != -1) { // enquanto a expressão for "true" ele continua
  opcao = getInteiroAleatorioEntre(-1, 10);
  console.log(`Opção escolhida foi ${opcao}.`);
}

console.log("Até a próxima!");
