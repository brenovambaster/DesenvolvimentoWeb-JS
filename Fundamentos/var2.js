var numero = 1

{
    var numero = 2
    console.log('dentro=', numero)
}
// * como é uma variável global, acaba sobscrevendo a variável. imprimindo a última variável 
console.log('fora=', numero)