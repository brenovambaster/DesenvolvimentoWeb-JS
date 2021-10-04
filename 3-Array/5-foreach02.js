// Implementar o foreach

Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
            //** console.log(this) o this é  o própio array,nesse caso**
    }

}
const aprovados = ['breno', 'vitor', 'lucas', 'ana']

aprovados.forEach2((nome, i) => {
    console.log(`nome:${nome} indice:${i}`)
});