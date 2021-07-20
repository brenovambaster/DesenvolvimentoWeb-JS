function Carro(velMax = 200, delta = 5) {
    // atr privado
    let velAtual = 0;
    this.Name = "Carro"

    // metdo puvlico
    this.acelerar = () => {
        if (velAtual + delta <= velMax)
            velAtual += delta
        else
            velAtual = velMax;
    }

    this.getVelAtual = (vel) => {
        return velAtual;
    }

    this.oq = () => console.log(this)


    this.ola = function() {
        console.log("OLA")
    }

}

const uno = new Carro(200, 30)
uno.acelerar()
console.log(uno.getVelAtual())
uno.ola()
uno.acelerar()
console.log(uno.getVelAtual())
console.log(uno.Name)