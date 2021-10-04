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
        /* Recebe uma lista de objetos e coloca esses obj em um array [obj1,obj2,...,objn] 
         * ...lancamenteos possibilita passar um ou mais parametros, no final, concatena tudo no atribudo da classe 
         *  this.lacamentos(que é um array) 
         * this.lancamentos é o  atributo array da classe ciclofinanceiro (this.ano, this.mes, this.lacamentso) 
         */
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
console.log(salario, contaluz)
console.log(conta)

conta.addLancamentos(salario, contaluz);
console.log(conta.sumario())
console.log(conta)