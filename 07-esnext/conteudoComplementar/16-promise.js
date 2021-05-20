const _ = require('lodash');

function gerarNumeroAleatorio(min, max) {
  if (min > max) {
    [max, min] = [min, max]
  }

  return new Promise((resolve) => {
    const aleatorio = _.random(min, max);
    resolve(aleatorio);
  });
}

gerarNumeroAleatorio(1, 60)
  .then((num) => num * 10)
  .then((numX10) => `O número gerado foi ${numX10}`)
  .then(console.log);