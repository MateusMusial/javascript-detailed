const _ = require('lodash');

function gerarNumeroAleatorio(min, max, tempo) {
  if (min > max) {
    [max, min] = [min, max]
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      const aleatorio = _.random(min, max);
      resolve(aleatorio);
    }, tempo);
  });
}

function gerarVariosNumeros() {
  return Promise.all([
    gerarNumeroAleatorio(1, 60, 3000),
    gerarNumeroAleatorio(1, 60, 2000),
    gerarNumeroAleatorio(1, 60, 1000),
    gerarNumeroAleatorio(1, 60, 1500),
    gerarNumeroAleatorio(1, 60, 300),
    gerarNumeroAleatorio(1, 60, 900),

  ]);
}

gerarVariosNumeros()
  .then(console.log);

/*
 * Vai imprimir no console depois que todos os numeros forem gerados!!
 */