const funcs = [];

for (let i = 0; i < 10; i++) {
  funcs.push(function() {
    console.log(i);
  });
}

funcs[2]();
// -> 2
funcs[8]();
// -> 8

/*
 * Agora com "let" funciona muito bem!!
 * Isso tem a ver com closure que será explicado mais pra frente.
 * Uma função tem consiência do local que foi definida.
*/