// vai receber um obj com essas chaves, e vai desestruturar o obj
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { min: 100, max: 200 }
console.log(rand(obj))
console.log(rand({ min: 12 })) // passa apenas um paramentro, pois o maximo é predefinido por padrao 1000

console.log(rand({})) // por padrão os valores sao definidos entre 0 e 1000. Logo, o obj vazio será min 0 e max 1000


console.log(rand()) // erro pois nao passou um obj