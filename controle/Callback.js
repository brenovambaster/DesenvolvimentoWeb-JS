const fabricantes = ['Audi', 'Mercedes', 'bmw']


function imprimir(nome, indice) {
    console.log(`${indice}.${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach((fabricante) => console.log(fabricante))


// CALLBACKS ==============================================================================
const notas = [2, 1, 12, 5, 6, 7, 8]
let newNotas = [];
var media = 0

notas.forEach((a) => {
    (a >= 7) ? newNotas.push(a): 0;
})

notas.forEach(a => media += a)

console.log(notas)
console.log(newNotas)
console.log(`media de todas as notas: ${media/notas.length}`)