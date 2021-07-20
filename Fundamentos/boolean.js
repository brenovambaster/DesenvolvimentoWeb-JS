let isAtivo = true;
console.log(isAtivo)
isAtivo = 1;
console.log(!!isAtivo)

console.log("-------TIPOS VERDADEIROS----------")
console.log(!!3)
console.log(!!-3)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("-----VALORES FALSOS------------")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("Para finalizar")
console.log(!!('' || null || 0 || ' ')) //retorna valor verdadeiro
let nome = 'fabio';
console.log(nome || 'desconhecido')