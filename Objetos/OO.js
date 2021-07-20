const produto = new Object
produto.nome = 'cadeira'
produto.preco = 23
produto.title = 'acento'

let { nome, preco } = produto
console.log(nome, preco)



const carro = {
    modelo: 'A4',
    valor: 6565.65,
    propietario: {
        name: 'Breno',
        idade: 12,
        endereco: {
            rua: 'ABZ',
            numero: '21',
        }
    },
    color: 'red',
    ano: 2012
}

const { propietario: { endereco } } = carro
console.log(endereco)
console.log(carro)