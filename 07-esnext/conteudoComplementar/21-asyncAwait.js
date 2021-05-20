const _ = require("lodash");

function gerarNumeroAleatorio(min, max, numerosProibidos) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve, reject) => {
    const aleatorio = _.random(min, max);
    if (numerosProibidos.includes(aleatorio)) {
      reject("Deu números repetido!");
    } else {
      resolve(aleatorio);
    }
  });
}

async function gerarMegaSena(qntdNumeros) {
  const numeros = [];
  try {
    for (const valor of Array(qntdNumeros).fill()) {
      numeros.push(
        await gerarNumeroAleatorio(1, 60, numeros)
      );
    }
    return numeros; // "return" é o "resolve" dentro de uma função assincrona
  } catch (error) {
    // "throw" é o "reject" dentro de uma função async
    throw `Função async diz: Deu erro, não conseguimos gerar ${qntdNumeros} números sem ser repetido, tente novamente!`;

  }
}

gerarMegaSena(5)
  .then(console.log)
  .catch(console.log);