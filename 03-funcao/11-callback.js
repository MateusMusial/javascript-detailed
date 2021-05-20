// Callback - chamar de volta.
const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir); // para cada elemento encontrado vai chamar a funcao "imprimir"
// -> 1. Mercedes
// -> 2. Audi
// -> 3. BMW

fabricantes.forEach((fabricante) => console.log(fabricante));
// -> Mercedes
// -> Audi
// -> BMW

/*
 * O evento nesse caso é para cada elemento que a função ".forEach()" encontrou,
 * passar uma nova função como "imprimir" ou a function arrow com "console.log()"
*/