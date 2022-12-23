function myConcat(separador) {
    var result = "", // inicializa a lista
        i;
    // * itera por meio de argumentos recebidos na função; I=1, pois se fosse 0 ele pegaria o separador 2x
    for (i = 1; i < arguments.length; i++) {
        result += arguments[i] + separador;
    }
    return result;
}
console.log(myConcat('_', 'q', 'w', 'w', 1))



//  Parâmentro REST )...)
function multiplicar(multiplicador, ...args) {
    return args.map((current_value,) => multiplicador * current_value); // multiplica cada valor do array e retorna 
}

var arr = multiplicar(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]