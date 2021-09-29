// sem callback
const notas = [2, 4, 5, 8, 4, 2, 7, 8, 1]
let notasB = []
for (let i in notas) {
    if (notas[i] < 7)
        notasB.push(notas[i])
}
console.log(notasB)


// com callback
notasB = notas.filter(nota => { return nota < 7 })
notasB2 = notas.filter(function(nota) { return nota < 7 })

console.log(notasB)