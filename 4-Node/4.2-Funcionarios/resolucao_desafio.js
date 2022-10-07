
/* Extrair a MULHER CHINESA com o   MENOR SALÁRIO */
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios')
axios.get(url).then(response => {
    const funcionarios = response.data;
    const funcionarios2 = funcionarios;


    //  CODE SMEL
    /* Dentro do filter E reduce  passa-se uma callback */
    const funcionaria = funcionarios.filter((element, index) => {
        return element.pais === 'China' && element.genero == 'F'
    })

    let result = funcionaria.reduce((accumulador, current) => {
        return (accumulador.salario < current.salario) ? accumulador : current;
    })
    console.log(result)

    /* -------- REFACTORING CODE ---------- */
    const pais_China = f => f.pais === 'China';
    const mulher = e => e.genero === 'F';
    const menor_salario = (acc, cur) => {
        return (acc.salario < cur.salario) ? acc : cur;
    }

    let func = funcionarios2
        .filter(pais_China)
        .filter(mulher)
        .reduce(menor_salario);

    console.log(func)

})