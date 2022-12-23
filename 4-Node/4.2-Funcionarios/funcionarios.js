/* DESAFIO AULA 154 */

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const china = (e) => e.pais == "China"
const mulheres = (f) => f.genero == "F"

//^ sempre passa para a próxima iteração no reduce o funcionário(acumulador) que tem o menor salário para ser 
//^ comparado com o próximo funcionário
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionario = response.data
    const funcionaria = funcionario
        .filter(china)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(funcionaria)

})
