const { ola } = require("./01-modulo") // retorna o valor da chave ola
const module1 = require("./01-modulo") // retorna um objeto com todas as chaves e valores
const module2 = require("./02-modulo")

// const {ola} = require("./01-modulo") // retorna apenas o  valor do atributo cujo o nome da chave é o mesmo. Ex: {opa} ={opa:'ola',nome:'wer'}

console.log(ola)
console.log(module1)
console.log(module2)
console.log(module2.nome_br())