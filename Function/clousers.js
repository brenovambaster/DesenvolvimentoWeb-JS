const x = 'global'

function fora() {
    const x = 'local'

    function dentro() {
        return x
    }
    return dentro
}

const func = fora()
console.log(func())

var pet = function(nome) { // A função externa define uma variável "nome"
        var getNome = function() {
            return nome; // A função interna tem acesso à variável "nome"  da função externa
        }

        return getNome; // Retorna a função interna, expondo-a assim para escopos externos
    },
    myPet = pet("Vivie");

console.log(myPet)
console.log(myPet())