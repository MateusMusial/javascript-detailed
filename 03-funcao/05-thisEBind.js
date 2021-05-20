
const pessoa = {
  saudacao: "Bom dia!",
  falar() {
    console.log(this.saudacao);
  },
};

pessoa.falar();
// -> "Bom dia!"

// armazenando a função "pessoa.falar" dentro da constante "falar".
// Para isso não usamos "()" o código fonte da função é copiado para dentro da variável
const falar = pessoa.falar;
falar(); // conflito entre paradigmas: funcional e OO
// -> undefined
// "this" apontou para outro objeto que não é mais "pessoa"

// Para resolver.... usamos o ".bind()" no qual passamos um objeto que gostariamos que seja resolvido o "this"
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();
// -> "Bom dia!"

// Ou podemos envolver em outra função.. no caso aqui uma Arrow Function.
const wrapperFalarPessoa = () => pessoa.falar();
wrapperFalarPessoa();
// -> "Bom dia!"