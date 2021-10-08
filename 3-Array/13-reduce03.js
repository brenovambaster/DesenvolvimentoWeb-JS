// implementado reduce
Array.prototype.reduce2 = function(callback) {
    let acumulador = this[0];
    for (let i = 1; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)

    }
    return acumulador
}

const num = [1, 2, 3, 4, 5, 6]
const soma = num.reduce2((a, b) => a + b)
console.log(soma)