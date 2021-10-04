let aluno = ['breno', 'carlos', 'vitoria'];
console.log(aluno)


/* Resumo: push, sort, splice */
aluno[0] = 'Breno Vambasater' // add ou modificar array pelo indice;
aluno.push('Victor Matos'); // add um elemento na ultima posicao do array;

console.log(aluno)
aluno.sort() // ordena o array; altera  array original
console.log(aluno)
delete aluno[2]
console.log("linha 13: " + aluno[2])
console.log(aluno.splice(1, 1))
    /*  (a,b)O 1 valor é a partir do indice que quer se trabalhar, o segundo(b)
    valor é a quantidade de elementos que se deseja excluir a partir do indice inserio a inserdo (a,b)  */
console.log(aluno.splice(1, 1, 'elemento1', 'elemento2')) // exclui 1 elemento em [1] e add alements (elemento1,elemento2)
console.log(aluno) // add alements