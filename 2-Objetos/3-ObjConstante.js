const pessoa = {
    nome: 'breno',
    idade: 19
}

// pessoa = { nome: 'vitor' } vai dar erro, pois pessoa é constante (const)
Object.freeze(pessoa);
pessoa.nome = 'pedro' // os valores do obj não é mudado pois o obj está congelado.
console.log(pessoa)

const obj = {
    // maneira antiga de declarar funcao em obj
    funcao: function() {
        return 1;
    },
    // nova forma que é permitida
    funcao2() {
        return 1;
    }
}