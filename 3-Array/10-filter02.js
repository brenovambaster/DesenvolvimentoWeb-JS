Array.prototype.filter2 = function(callback) {
    // nao usar arrowfunction ^^^^, pois não dá certo. Uma vez que o this da arrowFunction é local e n varia
    const newArray = [];
    /*  o this sera a referencia do array que precede a chamada da funcao filter2.[ array.filter2()]  que dentro da função
     será  usado como this.length. Que é como  se Chamássemos  array.length
    */
    for (let i = 0; i < this.length; i++) {
        // é o msm que dizer: funcaoInformada(elemento[i], posicao, array)    
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produto = [
    { nome: "notetbook", preco: 1231, fragil: true },
    { nome: "teclado", preco: 101, fragil: true },
    { nome: "capa de ceular", preco: 31, fragil: false },
    { nome: "capa de releogio", preco: 31, fragil: false },
    { nome: "Colchão", preco: 3112, fragil: false },
    { nome: "ceular motoG", preco: 3112, fragil: true },
    { nome: "Galaxy J5", preco: 1121, fragil: true }
]

// retorna uma função
const caro = (obj) => obj.preco >= 100;
const fragil = (obj) => obj.fragil;
console.log("Caro e fragil")
console.log(produto.filter2(caro).filter2(fragil))

console.log("Barato e nao fragil")
console.log(produto.filter2((prod) => {
    /*  prod será uma "referencia" ou cópia de produto na posicao [i]. prod  é um obj com chaves e valores */
    return prod.preco < 50;
}).filter2((prod) => {
    return !prod.fragil
}))

console.log("-------------------------------------------------")
console.log(produto)