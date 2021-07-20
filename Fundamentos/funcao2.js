// armazenar funcao dentro da variável; 
const imprimaSoma = function(a, b) {
    console.log(a + b)
}
imprimaSoma(2, 6)

// armazenando uma funcao arrow em uma variavel
const soma = (a, b) => { return a + b }

// retorno implícito
const subtracao = (a, b) => a - b
console.log(soma(6, 6))
console.log(subtracao(10, 6))