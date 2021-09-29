class lancamento {

    constructor(nome = 'GENERICO', valor = 0) {
        this.nome = nome;
        this.valor = valor;
    }
}

class ciclofinanceiro {
    constructor(ano, mes) {
        this.ano = ano;
        this.mes = mes;
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valConsolidado = 0;
        this.lancamentos.forEach(l => {
            valConsolidado += l.valor
        })
        return valConsolidado;
    }

}

const salario = new lancamento('salario', 4500);
const contaluz = new lancamento('luz', -220);
const conta = new ciclofinanceiro(6, 2018);
conta.addLancamentos(salario, contaluz);
console.log(conta.sumario())