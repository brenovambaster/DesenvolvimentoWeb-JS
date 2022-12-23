const carrinho = [
    '{"nome":"Borracha", "preco":3.45}',
    '{"nome":"Caderno", "preco":5.25}',
    '{"nome":"Kit lapis", "preco":6.35}',
    '{"nome":"Caneta", "preco":1.35}'
]

let convertJson = element => JSON.parse(element); // ~ gera cada elemento do array em objeto.
let extraiPreco = element => { return element.preco } // ~ extrai de cada elemento (que é um objto) o valor da chave ´preco´ 
let resul = carrinho.map(convertJson).map(extraiPreco)
console.log(resul);
/*
// SOLUNÇAÕ 1
let result = [] = carrinho.map((element, ind) => {
return JSON.parse(element)
})
console.log(result)
let result2 = [] = result.map((element, ind) => {
return (element.preco)
})
console.log(result2)
*/