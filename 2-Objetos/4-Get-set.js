const sequencia = {
        _valor: 1, // convecao para ser acessada internamente
        get valor() { return this._valor++ },
        set valor(valor) {
            valor > this._valor ? this._valor = valor : 0
        }
    }
    //console.log(sequencia.valor)
console.log(sequencia.valor)
console.log(sequencia.valor)
console.log(sequencia.valor = -1)
console.log(sequencia.valor)