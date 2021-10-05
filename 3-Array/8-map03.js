Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome":"Borracha", "preco":3.45}',
    '{"nome":"Caderno", "preco":5.25}',
    '{"nome":"Kit lapis", "preco":6.35}',
    '{"nome":"Caneta", "preco":1.35}'
]

let convertJson = element => JSON.parse(element);
let extraiPreco = element => element.preco
let resul = carrinho.map2(convertJson).map2(extraiPreco)
console.log(resul);