const seq = {
    _valor: 1, // convenção de var 'privada'
    get valor() { return this._valor++ },

    set valor(valor) {
        if (this._valor < valor) {
            this._valor = valor
        } else
            return 'erro: seq -'
    },
    soma(a = 0, b = 0) { return a + b }

}