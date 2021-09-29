let dobro = function(a) {
    return 2 * a
}
dobro = a => { return 2 * a } //ou 
let dobro2 = (a) => { return 2 * a } //ou
dobro2 = a => 2 * a; // retorno implicito


let ola = function() {
    return 'HEEI'
}

let ola3 = () => {
    return 'OPAAAA COMO VAI'
}

let ola2 = () => 'OPAAA'
console.log(ola2())
console.log(ola3())



soma = (a, b) => a + b
console.log(soma(1, 2))