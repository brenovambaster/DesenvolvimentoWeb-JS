const pessoa = {
    nome: 'jessica',
    idade: 43,
    peso: 65
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

console.log(Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '10/12/2000'
}))
console.log(pessoa.dataNascimento)
console.log(pessoa.dataNascimento = '10/3/2010')
console.log(pessoa.dataNascimento)