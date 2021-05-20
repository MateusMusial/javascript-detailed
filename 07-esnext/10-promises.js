// "Promises" nada mais é que uma promessa

function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase); // vai ser chamado quando a promessa for atendida...
    }, segundos * 1000);
  });
}

falarDepoisDe(3, "Hello World!")
  // ".then" usado para acessar o resultado de uma promessa atendida com sucesso
  .then((frase) => frase.concat("\nPromessa atendida com sucesso!"))
  // podemos encadear o ".then"
  .then((outraFrase) => console.log(outraFrase))
  .catch((error) => console.log(error)); // ".catch" usado para o "reject" tratar erros

