const soma = function(x, y) {
    return x + y
}

const imprimaResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}
imprimaResultado(2, 6)

imprimaResultado(2, 10, function(x, y) {
    return x - y
})

imprimaResultado(2, 10, (z, y) => z * y)

const dog = {
    latir: function() {
        console.log("AUAU")
    }
}
dog.latir()