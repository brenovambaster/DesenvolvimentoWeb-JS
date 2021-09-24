console.log(typeof Object)

function imprimirSoma(a, b) {
    console.log('Soma de a+b=' + (a + b))
}
imprimirSoma(2, 6)


function soma2(a, b = 0) // quando nao passar o segundo valor será 0 automaticamente
{
    return a + b;
}
console.log(soma2(9))
console.log(soma2(9, 3))