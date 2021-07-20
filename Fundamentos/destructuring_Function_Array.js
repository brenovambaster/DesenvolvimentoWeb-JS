function rand([min = 0, max = 1000]) {
    if (min > max) /* operador destructuring */ [min, max] = [max, min] /* criadno array com os valores passados por parms*/
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([4000, 500]))
console.log(rand([40, 500]))