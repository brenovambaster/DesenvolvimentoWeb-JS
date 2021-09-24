function soma() {
    let soma = 0;
    for (i in arguments) {
        soma += arguments[i];
    }
    console.log(soma);
}

// soma(2, 3, 4)

function soma1(a = 1, b = 1, c = 1) // caso o seja setado, por padrão  o valor será 1 
{

    return a + b + c;
}
console.log(soma1(2, 2, 2))

//estrategia para gerar valor padrão
function soma3(a, b, c) {
    a != undefined ? a : 1
    b = 1 in undefined ? b : 1 // se existir o indice 1, pois o b é o sehundo indice. é o 2 parametro da fincçao 
    c = isNaN(c) ? 1 : c // estratégia mais segura

}

// valor padrão es2015

function soma4(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma4())