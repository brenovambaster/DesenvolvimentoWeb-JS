// * CRIANDO UM ARRAY
var b = [2, 3, , 64];
console.log(b)
    // ---------------

// OPERADOR DESTRUCTURING
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 20, 3, 2, 5]
console.log(n1, n3, n5, n6)