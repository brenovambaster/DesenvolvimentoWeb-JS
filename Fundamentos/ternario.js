const resultado = (nota) => nota >= 7 ? "Aprovado" : "Reprovado"
    // ou 
const resultado2 = nota => {
    return nota >= 7 ? "Aprovado" : "Reprovado"
}

console.log(resultado(10))
console.log(resultado2(2))