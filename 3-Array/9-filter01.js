// retorna todos os elementos que se enquadra no filtro
const produto = [
    { nome: "notetbook", preco: 1231, fragil: true },
    { nome: "capa de ceular", preco: 31, fragil: false },
    { nome: "ceular motoG", preco: 3112, fragil: true },
    { nome: "Galaxy J5", preco: 1121, fragil: true }
]

console.log(produto.filter((ind) => {
    // menor que 200 e nao fragil
    return ind.preco <= 200 && !ind.fragil;
}))

console.log(produto)