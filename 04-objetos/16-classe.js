class Lancamento {
  constructor(nome = "Genérico", valor = 0) {
    this.nome = nome;
    this.valor = valor;
  }
}

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes;
    this.ano = ano;
    this.lancamentos = [];
  }

  addLancamentos(...lancamentos) {
    lancamentos.forEach((l) => this.lancamentos.push(l));
  }

  sumario() {
    let valorConsolidado = 0;
    this.lancamentos.forEach((l) => {
      valorConsolidado += l.valor;
    });
    return valorConsolidado;
  }
}

const salario = new Lancamento("Salario", 45000);
console.log(salario);
// -> Lancamento { nome: 'Salario', valor: 45000 }

const contaDeLuz = new Lancamento("Luz", -220);
console.log(contaDeLuz);
// -> Lancamento { nome: 'Luz', valor: -220 }

const contas = new CicloFinanceiro(6, 2018);
console.log(contas);
// -> CicloFinanceiro { mes: 6, ano: 2018, lancamentos: [] }

contas.addLancamentos(salario, contaDeLuz);
console.log(contas);
// -> CicloFinanceiro {
// ->  mes: 6,
// ->  ano: 2018,
// ->  lancamentos: [
// ->    Lancamento { nome: 'Salario', valor: 45000 },
// ->    Lancamento { nome: 'Luz', valor: -220 }
// ->  ]
// -> }

console.log(contas.sumario());
// -> 44780
