// usar spread com objeto
const funcionario = { nome: "Ricardo", idade: 19 }
const gerente = { salario: 12000, ...funcionario }

/*
*   os objetos formados são diferentes,um não tem referência do outro 
*  foi feito apenas um clone de funcionario para gerente
*/
console.log(funcionario);
console.log(gerente);