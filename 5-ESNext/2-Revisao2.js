// arrow function 
const soma = (a, b) => a + b;
const soma2 = (a, b) => { return a + b }
let initValue = 0;
// operator Rest or Spread
const soma3 = (...args) => {
    let somaTotal = args.reduce((accumulator, curr) => {
        return accumulator + curr;
    })
    return somaTotal
}
console.log(soma3(1, 2, 3, 12));

//Arraow Funtion (this)
const lexico1 = () => console.log(this === exports);
const lexico2 = () => lexico1.bind({})
lexico1()
lexico2()
lexico1()
