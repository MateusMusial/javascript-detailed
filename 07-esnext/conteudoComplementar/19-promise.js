function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceErro) {
      reject('Ocorreu um erro');
    } else {
      resolve(valor);
    }
  });
}

funcionarOuNao('Funcionou o programa sem erros!', 0.6)
  .then((valor) => console.log(`Valor: ${valor}`))
  .catch((error) => console.log(`Erro: ${error}`));
