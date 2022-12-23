
/* This e exports são apenas uma referência na qual module.exports aponta. Por isso, para exportar 
tem que usar module.exports={..} */
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1;
exports.b = 2;
module.exports.c = 4

console.log(exports)
exports = null
console.log(module.exports)

// ^ não consegue exportar nessa maneira. Deve-se usar module.exports ={...} 
exports = {
    nome: 'teste'
}
console.log(exports)
console.log(module.exports)