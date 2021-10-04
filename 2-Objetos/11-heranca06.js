// -- SIMULANDO O NEW --//
function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('aula1', 1123)
const aula2 = new Aula('aula2', 4124)
console.log(aula1, aula2)

function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}
const aula3 = novo(Aula, 'aula3', 314)
const aula4 = novo(Aula, 'aula4', 4)
console.log(aula3, aula4)