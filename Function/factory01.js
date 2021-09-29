const prod1 = {
    name: 'sabao',
    price: 12,
    qtd: 13,
    _valor() {
        console.log(this.price)
    },
    _name: () => { // atributo "_name:" recebe uma função
        return console.log("prod1 " + prod1.name) // arrow function tem this != 
    },
    _name2: function() {
        return console.log(this.name) // this = prod1
    },
    _name3() {
        return console.log(this.name)
    }
}
console.log(prod1._name2())

// function factory retorna um objeto com funções
function criarProd(name2 = 'indefinido', price2 = 1, amount2 = 1) {
    return prod2 = {
        /* ou assim  
            name, 
            price, 
            amount 
        */
        name: name2,
        price: price2,
        amount: amount2,
        _name: function() { console.log(this.name) },
        _pirce() { console.log(this.price) },
        _qtd: () => { console.log(prod2.amount) },
        seeData() {
            console.log('name: ' + this.name, 'price: ' + this.price, 'qtd: ' + this.amount)
        }
    }

}

const pord2 = criarProd() // caso não passe argumentos, a função inicia os argumentos por padrão pré-definidos.
pord2.seeData()

// factory
const pessoa = (nome) => {

    return {
        falar: () => console.log(nome)
    }
}
const p2 = pessoa('ben')
p2.falar()