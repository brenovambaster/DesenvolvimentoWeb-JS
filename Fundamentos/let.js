var num = 1
    // let tem escopo apenas dentro do bloco. Ou seja, só é válida dentro do bloco de código 
    {
        let num = 2
        console.log('dentro=', num)
    }
console.log('fora=', num)