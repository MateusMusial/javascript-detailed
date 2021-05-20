const fs = require('fs');

const caminho = __dirname + '/dados.txt';

function lerArquivo(caminho) {
  return new Promise((resolve) => {
    fs.readFile(caminho, 'utf-8', (error, conteudo) => {
      resolve(conteudo);
    });

  });
}

lerArquivo(caminho)
  .then((conteudo) => conteudo.toUpperCase())
  .then((conteudo) => conteudo.split('\n'))
  .then((linhas) => linhas.join(', '))
  .then((conteudo) => console.log(`O valor final é: ${conteudo}`))
