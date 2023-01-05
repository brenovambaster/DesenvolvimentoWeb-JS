/*  Não usamos o Axios  pois ele é baseado em promises, nesse exemplo veremos a motivação para
 usarmos promises, visto que resolver esse problema com callbacks não é viável. */
const { table } = require('console')
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, (res) => {
        let resultado = ''
        res.on('data', dados => resultado += dados)
        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = [];

getTurma('A', alunos => {
    // após  finalizado o get, essa função callback é chamada;
    nomes = nomes.concat(alunos.map((value) => `A: ${value.nome}`))
    //console.log("Turma A:" + nomes);
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(value => `B:${value.nome}`))
        //console.log("Turma A e B: " + nomes);

        getTurma('C', (listaAluno) => {
            nomes = nomes.concat(listaAluno.map(value => `C: ${value.nome}`))
            console.log(nomes); // "Turma A, B e C: "
        })
    })


})
// console.table("Turma A,B e C: " + nomes);  não mostra nada, pois abriu uma nova thread para executar as callbacks. 