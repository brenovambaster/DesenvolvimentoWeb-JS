const notas = [1, 2, 3, 5, 6, 4, 8];

//sem callbvack
let notasBaixas1 = [];
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

// usando callback
let notasBaixas2 = notas.filter(function(nota) {
    return nota < 6;
})

let notasBaixas3 = notas.filter((nota) => nota < 3)
console.log(notasBaixas3)