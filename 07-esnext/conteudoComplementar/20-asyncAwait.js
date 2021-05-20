function makeCounter() {
  let count = 1;
  return () => count++;
}
const counter = makeCounter();

function esperarPor(tempo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Executando pela ${counter()}ª vez`);
      resolve();
    }, tempo);
  });
}

const frase = 'Async/Await....'

// trabalhamos como se fosse um codigo sincrono
// só conseguimos fazer um "await" apartir de uma fuction que retonra uma "promise"
// "await" espera a "promise" ser resolvida..
async function executar() {
  await esperarPor(2000)
    .then(esperarPor)
    .then(esperarPor)
    .then(console.log('Async/Await....'));

  await esperarPor(2000)
    .then(esperarPor)
    .then(esperarPor)
    .then(console.log('Async/Await....'));

  await esperarPor(2000)
    .then(esperarPor)
    .then(esperarPor)
    .then(console.log('Async/Await....'));
}

executar();


// Saida sem "await"
// -> Async/Await....
// -> Async/Await....
// -> Async/Await....
// -> Executando pela 1ª vez
// -> Executando pela 2ª vez
// -> Executando pela 3ª vez
// -> Executando pela 4ª vez
// -> Executando pela 5ª vez
// -> Executando pela 6ª vez
// -> Executando pela 7ª vez
// -> Executando pela 8ª vez
// -> Executando pela 9ª vez