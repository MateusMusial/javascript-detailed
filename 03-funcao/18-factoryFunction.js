// Funções Fabricas - função que retorna um objeto

// Factory simples
function criarPessoa() {
  return { // usando a notação literal de objeto
    nome: "Ana",
    sobrenome: "Silva",
  };
}

console.log(criarPessoa());
// -> { nome: 'Ana', sobrenome: 'Silva' }