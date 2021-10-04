String.prototype.reverse = function() {
    return this.split('').reverse().join('')
        // this.split gera um array
        //.reverse é um método existente na API do array, nós nao o criamos. Após isso, de reverter, juntamos tudo novamente.(join)
}
console.log("ola galera".reverse()) // o método .reverse não existe na API da String. Esse método foi criado por mim na linha 1;