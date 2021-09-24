const valores = [7.2, 3.3, 4.6, 5.0]
console.log(valores[2], valores[3])
    // como nao existe o indice 4, o valor será indefinido. 
console.log(valores[4])
valores[4] = 10
console.log(valores[4])
valores[10] = 98
console.log(valores[10])
console.log(valores)
console.log(valores.length) // retorna a quantidade de itens no vetor(vazios ou nao)
valores.push({ id: 3 }, null, false, 'teste')
console.log(valores)
console.log(valores.pop()) // tira o ultima valor do array
delete valores[0] // deleta o valor do array na posição que voce desejar
console.log(valores)
console.log(typeof valores)