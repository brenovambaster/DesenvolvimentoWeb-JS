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
    condutores: [{ nome: 'Breno', CNH: 12312341 }, { nome: "Aline", CNH: 354311 }],
    color: 'red',
    ano: 2012
}

// MANEIRA INEFICAZ, já que temos de colocar propietario.algumacoisa toda vez que quisermos acessar uma chave
/** 
const { propietario, condutores } = carro
console.log(propietario.endereco)
console.log(propietario.name)
console.log(condutores)
console.log(carro.ano) 
**/

const { propietario: { endereco, name }, condutores } = carro
console.log(endereco)
console.log(name)
console.log(condutores)
console.log()