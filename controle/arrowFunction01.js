let dobro = function(a) {
    return 2 * a
}
dobro = a => { return 2 * a } //ou 
dobro2 = (a) => { return 2 * a } //ou
dobro2 = a => 2 * a; // retorno implicito


let ola = function() {
    return 'HEEI'
}

ola3 = () => {
    return 'OPAAAA COMO VAI'
}

ola2 = () => 'OPAAA'
console.log(ola2())
console.log(ola3())



soma = (a, b) => a + b
console.log(soma(1, 2))