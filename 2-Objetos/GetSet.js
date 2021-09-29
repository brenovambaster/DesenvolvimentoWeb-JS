// NAo existe o private em js

const sequencia = {
    _valor: 1,
    get valor() {
        return this._valor++;
    },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

sequencia.valor = 100
console.log(sequencia.valor, sequencia.valor)