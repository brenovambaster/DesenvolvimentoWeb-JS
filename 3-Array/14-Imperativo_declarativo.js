const aluno = [
    { nome: "Breno", nota: 9 },
    { nome: "Victor", nota: 6 },
    { nome: "Ana", nota: 9.7 }
]

//imperativo
let total1 = 0
for (let index = 0; index < aluno.length; index++) {
    total1 += aluno[index].nota
}
console.log(total1 / aluno.length)

// Declarativo
const getNota = (alun) => alun.nota
const soma = (total, atual) => total += atual
const resul = aluno.map(getNota).reduce(soma)
console.log(resul / aluno.length)