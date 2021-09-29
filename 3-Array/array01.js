let aluno = ['breno', 'carlos', 'vitoria'];
console.log(aluno)

aluno[0] = 'Breno Vambasater' // add ou modificar array pelo indice;
aluno.push('Victor Matos');

console.log(aluno) // add um elemento na ultima posicao do array;
aluno.sort() // ordena o array; altera  array original
console.log(aluno)
delete aluno[2]
console.log(aluno[2])
console.log(aluno.splice(1, 1)) // (a,b)O 1 valor é a partir do indice que quer se trabalhar, o segundo(b) valor é a quantidade de elementos que se deseja excluir a partir do indice inserio a inserdo (a,b) 
console.log(aluno.splice(1, 1, 'elemento1', 'elemento2')) // add alements
console.log(aluno) // add alements