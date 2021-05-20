function makeCounter() {
  let count = 1;
  return () => count++;
}
const counter = makeCounter();

// Callback sem promisse...
// setTimeout(() => {
//   console.log(`Executando pela ${counter()}ª vez`);

//   setTimeout(() => {
//     console.log(`Executando pela ${counter()}ª vez`);

//     setTimeout(() => {
//       console.log(`Executando pela ${counter()}ª vez`);
//     }, 2000);
//   }, 2000);
// },2000);

// Com promise...
function esperarPor(tempo = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Executando pela ${counter()}ª vez`);
      resolve();
    }, tempo);
  });
}

esperarPor()
  .then(esperarPor)
  .then(esperarPor);
