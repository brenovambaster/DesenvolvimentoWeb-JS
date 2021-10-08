// o resultado passa para a próxima ocorrência
const alunos = [
    { nome: "Breno", nota: 7.1, bolsista: false },
    { nome: "Maria", nota: 5.30, bolsista: true },
    { nome: "Lucas", nota: 9.0, bolsista: false },
    { nome: "Fernanda", nota: 5.0, bolsista: false },
]

const resulNota = alunos.map((a) => a.nota) // extrai apenas um array com as notas
console.log("Notas array: " + resulNota)

// retorna a soma de todas as notas
let notasSomas = resulNota.reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})
console.log("Notas somadas: " + notasSomas)