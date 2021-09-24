{
    {
        {
            var sera = 'sera'
            console.log(sera)
        }
    }
}
// * Note que o escopo para o tipo de variável Var não faz diferenca. vc pode
// * acessar a varoável em escopo diferente; 
console.log(sera)

function teste() {
    var local = 'epaaa'
    console.log(local)
}
teste()
console.log(local)