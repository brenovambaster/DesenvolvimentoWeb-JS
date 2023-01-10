/**
 * @param {int} segundos - Tempo a ser esperado
 * @param {string} frase - Frase que retornará 
 * @returns  Promise()
 */
function falarDepoisde(segundos, frase) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000);
    })
}

falarDepoisde(2, "Falou apos 2s")
    .then((result) => {
        //  Mostra o resultado da Promise quando ela termina de executar e retorna o resultada para a próxima chamada.
        console.log(result);
        return result
    })
    .then((result) => console.log("Chamada encadeada. Concatena o retorno anterior com (#) => " + result.concat('#')))
    .catch((err) => {
        console.log("Algo de arrado aconteceu: " + err);
    });