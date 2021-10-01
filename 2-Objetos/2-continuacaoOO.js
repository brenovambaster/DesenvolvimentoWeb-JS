// Função construtora
function Produto(nome, preco, desconto) {
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return (preco * (1 - desconto))
    }
}

const p1 = new Produto('Abacaxi', 10, 0.25)
const p2 = new Produto('Abacate', 12, 0.25)

console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())


// Funcção Factory : Criar um objeto e retorná-lo
function criaFunc(nome, idade, salario, faltas = 0) {
    return {
        nome,
        salario,
        idade,
        getSalario() { return salario / 30 * (30 - faltas) }
    }
}
const p3 = criaFunc("breno", 12, 12313, 15)
console.log(p3)
console.log(p3.getSalario())