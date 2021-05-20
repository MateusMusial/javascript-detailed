const valor = "Global";

function minhaFuncao() {
  console.log(valor);
}

function exec() {
  const valor = "Local";
  minhaFuncao();
}

exec();
// -> "Global"

/*
 * Quando uma função é declarada em JS ela se lembra do seu contexto léxico
 * ou seja no contexto no qual foi escrita.
*/