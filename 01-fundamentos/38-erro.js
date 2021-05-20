function tratarErroELancar(erro) {
  // "throw" serve para tratar o erro, criando um tipo para ele, podemos criar um objeto com a hora do erro e o tipo.
  throw new Error(`Tivemos um erro: ${erro}`);


}

function imprimirNomeGritado(obj) {
  // Dentro do bloco "try" colocamos o código que achamos ou julgamos que está com um tipo de erro.
  try {
    console.log(obj.name.toUpperCase() + '!!!');

  } catch (e) { // dentro do bloco "catch" podemos tratar o erro, mostrando alguma mensagem para o usuário.
    tratarErroELancar(e);

  } finally { // o "finally" sempre será executado mesmo se o "try" estiver tudo certo ou se caiu no "cat"
    console.log('Final');
    // -> "Final"

  }
}

const obj = { nome: 'Mateus'};

imprimirNomeGritado(obj);
// -> Error: Tivemos um erro: TypeError: Cannot read property 'toUpperCase' of undefined

console.log('Continuando o Código!!');
// -> Continuando o Código!!

const soma = (a, b) => a + b;
console.log( soma(2, 3) );
// -> 5