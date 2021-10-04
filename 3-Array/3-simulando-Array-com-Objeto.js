const quaseArray = { 0: "Rafa", 1: "lucas", 2: "Breno" }
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})
console.log(quaseArray[0])
const meuArray = ['nome', 'vitor', 'breno']
console.log(meuArray, quaseArray.toString())