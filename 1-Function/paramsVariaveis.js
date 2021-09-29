function soma() {
    let soma = 0
    for (const i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1, 2))
console.log(soma(1, 3, 4, 5, 5))