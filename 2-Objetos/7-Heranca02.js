const avo = {
    at1: 'a'
}
const pai = {
    __proto__: avo,
    at2: 'b'
}

const child = {
    __proto__: pai,
    at3: 'c'
}

console.log(child.at1)
console.log(child.at2)
console.log(child.at3)



const carro = {
    velMax: 200,
    velAtual: 0,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual} de ${this.velMax}`
    }
}

const ferrai = {
    velMax: 320,
    modelo: "F40"

}
const volvo = {
    modelo: 'f100',
    status() {
        return `Modelo: ${this.modelo}, ${super.status()}`
    }
}

//Relação de protótipos entre objetos
Object.setPrototypeOf(ferrai, carro)
Object.setPrototypeOf(volvo, carro)


console.log(volvo.status())
volvo.acelerarMais(2)
console.log(volvo.status())
volvo.acelerarMais(2)
console.log(volvo.status())