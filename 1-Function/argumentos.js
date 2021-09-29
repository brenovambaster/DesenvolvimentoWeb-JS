function myConcat(separador) {
    var result = "", // inicializa a lista
        i;
    // itera por meio de argumentos
    for (i = 1; i < arguments.length; i++) {
        result += arguments[i] + separador;
    }
    return result;
}
console.log(myConcat(',', 'q', 'w', 'w', 1))

//  Parâmentro REST )...)
function multiplicar(multiplicador, ...args) {
    return args.map((x) => multiplicador * x); // multiplica cada valor do array e retorna 
}

var arr = multiplicar(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]