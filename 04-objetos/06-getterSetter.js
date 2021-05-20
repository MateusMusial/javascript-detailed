// Método "get" para ler o valor de uma variável.
// Método "set" para alterar o valor de uma variável.

const sequencia = {
  // por convenção colocamos um "underline _" em variáveis que pretendemos acessar apenas internamete.
  // uma convenção para informar outros desenvolvedores.
  _valor: 1,
  get valor() {
    return this._valor++;
  },

  set valor(valor) {
    if (valor > this._valor) {
      this._valor = valor;
    }
  },
};

// JS entende que eu estou apenas tentando ler e retorna a funcao "get valor()"
console.log(sequencia.valor, sequencia.valor);
// -> 1 2

sequencia.valor = 1000; // Aqui JS vai usar a função "set valor()"
console.log(sequencia.valor, sequencia.valor);
// -> 1000 1001

sequencia.valor = 900; // Aqui "set valor()" não aceita o valor pois é menor que o atual
console.log(sequencia.valor, sequencia.valor);
// -> 1002 1003
