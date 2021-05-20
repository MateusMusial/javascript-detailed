const funcs = [];

for (var i = 0; i < 10; i++) {
  funcs.push(function() {
    console.log(i);
  });
}

funcs[2]();
// -> 10
funcs[8]();
// -> 10

/*
 * Como o "var" não tem escopo de bloco ele causa esse erro histórico no JavaScript.
*/