const prod1 = {
    name: 'milk',
    preco: 12.23
}
const prod2 = {
    name: 'cake',
    preco: 12.23
}


// funcao factory: 

function criarPessoa() {
    return { name: 'Breno', idade: 12 }
}

function criarPessoa2(name, age) {
    return { name: name, age: age }
}
console.log(criarPessoa())
console.log(criarPessoa2('Breno', 20))