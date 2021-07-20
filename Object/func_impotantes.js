const pessoa = {
    name: 'breno',
    age: 18,
    peso: 60
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))
Object
    .entries(pessoa)
    .forEach(([chave, valor]) => { console.log(chave + ':' + valor) })

Object.defineProperties(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '10.12.2001'
})