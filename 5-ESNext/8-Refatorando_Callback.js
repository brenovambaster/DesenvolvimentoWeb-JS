/**
 * Usando o como base para refatorar o arquivo ./6-Callbacks_Aninhadas.js
*/




const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try { resolve(JSON.parse(resultado)) }
                catch (e) {
                    reject(e)
                }
            })
        })
    })
}

let nomes = []

// ^ Não é a melhor forma de chamar as promises uma dentro da outra. 
/* getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
}) */

// ^ Solução para o problema a cima. Semrpe que usar promise recomenda-se utilizar o cath
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas)) /* Junta tudo em um unico array, sem usar matriz */
    .then(x => console.log(x))
    .catch(e => console.log("erro: " + e))