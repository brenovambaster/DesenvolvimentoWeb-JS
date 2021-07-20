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