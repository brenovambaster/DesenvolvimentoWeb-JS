// sem callback
const notas = [2, 4, 5, 8, 4, 2, 7, 8, 1]

let notasMenores7 = []
for (let i in notas) {
    if (notas[i] < 7)
        notasMenores7.push(notas[i])
}
console.log(notasMenores7)


// com callback
notasMenores7 = notas.filter(nota => { return nota < 7 })
/*
^ outra maneira seria: 
* notasMenores7 = notas.filter(nota => nota < 7)
* notasMenores7 = notas.filter(function (nota) { return nota < 7 })
*/
console.log(notasMenores7)