let dobro = function(a) {
    return a * a
}

console.log(dobro(2))

// arrow
dobro = (a) => { return a * a }
    // retorno implicito, sem parenteses para apenas 1 parms
dobro = a => a * a


let ola = function() {
    return "olaaaa"
}

ola = () => 'olaaa'

console.log(ola())