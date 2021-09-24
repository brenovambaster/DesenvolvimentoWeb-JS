function Carro(velMax = 200, delta = 5) {
    // atributo privado       
    let velAtual = 0;
    this.carro = undefined

    // metodo publico
    this.acelerar = function() {
        velAtual + delta <= velMax ? velAtual += delta : velAtual = velMax;
    }

    this.getVelAtual = function() {
        return velAtual;
    }

    this.aa = () => {
        console.log('opaaa')
    }

}


const uno = new Carro();
const uno2 = new Carro();
console.log(uno2.carro)
console.log(uno.carro)
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log('UNO: ' + uno.getVelAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log('FERRARI: ' + ferrari.getVelAtual())