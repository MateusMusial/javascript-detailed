// tagged templates - processa o template dentro de uma função
function tag(partes, ...valores) {
  console.log(partes);
  console.log(valores);
  return "Outra string";
}

const aluno = "Gui";
const situacao = "Aprovado";
console.log(tag`${aluno} está ${situacao}.`);
// -> [ '', ' está ', '.' ] - "partes" parâmetro da função "tag"
// -> [ 'Gui', 'Aprovado' ] - "...valores" parâmetro da função "tag"
// -> Outra string - retornado da função "tag"
