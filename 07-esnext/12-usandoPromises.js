// com promise...
const http = require("http");

const getTurma = (letra) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  return new Promise((resolve, reject) => {
    http.get(url, (resposta) => {
      let resultado = "";

      resposta.on("data", (dados) => {
        resultado += dados;
      });

      resposta.on("end", () => {
        try {
          resolve(JSON.parse(resultado));
        } catch (error) {
          reject(error);
        }
      });
    });
  });
};

// let nomes = [];
// getTurma("A").then((alunos) => {
//   nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`));
//   getTurma("B").then((alunos) => {
//     nomes = nomes.concat(alunos.map((a) => `B: ${a.nome}`));
//     getTurma("C").then((alunos) => {
//       nomes = nomes.concat(alunos.map((a) => `C: ${a.nome}`));
//       console.log(nomes);
//     });
//   });
// });

Promise.all([getTurma("A"), getTurma("B"), getTurma("C")])
  .then((turmas) => [].concat(...turmas)) // concatenando todos os elementos em um único array
  .then((alunos) => alunos.map((aluno) => aluno.nome)) // mapeando "alunos,nome"
  .then((nomes) => console.log(nomes)) // imprimindo os nomes no console
  .catch((error) => console.log(error.message)); // sempre faça o tratamento de erro

getTurma("D").catch((error) => console.log(error.message));
// -> Unexpected token < in JSON at position 0
