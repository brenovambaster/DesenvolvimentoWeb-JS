// Todos são bolsistas?
// o resultado passa para a próxima ocorrência
const alunos = [
    { nome: "Breno", nota: 7.1, bolsista: true },
    { nome: "Maria", nota: 5.30, bolsista: true },
    { nome: "Lucas", nota: 9.0, bolsista: false },
    { nome: "Fernanda", nota: 5.0, bolsista: false },
]

const bolsa = alunos.map((a) => a.bolsista)
console.log(bolsa)
const resp = bolsa.reduce((acumulador, atual) => { return acumulador && atual })
console.log("modo 1: " + resp)

// outra maneira mais simplificada

const todosBolsistas = (acum, atual) => acum && atual
const resultado = alunos.map((a) => a.bolsista).reduce(todosBolsistas)
console.log("modo 2: ", resultado)