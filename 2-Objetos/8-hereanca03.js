const pai = { nome: "Pedro", cabelo: "Preto" }
    // cria um objeto com o prototipo de pai
const filha1 = Object.create(pai);
filha1.nome = 'ana'
console.log(filha1.nome)
console.log(filha1.cabelo)