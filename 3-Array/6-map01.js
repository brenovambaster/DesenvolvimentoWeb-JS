// map nao transforma o array atual; Ele retorna um arrau modificado
const nums = [1, 2, 3, 4, 5]
let resul = nums.map(e => {
    return e * 2
})
console.log(nums, resul)

const soma10 = e => e + 10
const triplo = e => e * 3
const dinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
    //cada map retorna um array, logo podemos encadear os map, pois para cada array podemos modificá-los com o map
resul = nums.map(soma10).map(triplo).map(dinheiro)
console.log(resul)