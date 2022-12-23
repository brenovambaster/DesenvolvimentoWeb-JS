function meuObjeto() { }
console.log(meuObjeto.prototype)

const obj1 = new meuObjeto
const obj2 = new meuObjeto

console.log(obj1.__proto__)
console.log(obj2.__proto__)

console.log(obj1.__proto__ === obj2.__proto__)
console.log(meuObjeto.prototype === obj1.__proto__)
meuObjeto.prototype.nome = "anonimo"
meuObjeto.prototype.falar = function () { return console.log(`meu nome e =${this.nome}`) }
meuObjeto.prototype.grito = () => console.log(`Repare que ao colocarmos arrow function, o this nao varia:nome=${this.nome}`)
/* 
 * ATENÇÃO: 1) No caso acima (meuObjeto.prototype.grito.... )  teremos um erro ao acessar o this.nome pelo motivo do
 * this variar de acordo com a função em que foi declarada.
 * O this em funçaõ arrow, nao foge do escopo, ou seja, não procura o atripudo fora daquele lugar em que foi declarada.
 * Ao tentar acessar this.nome por uma função arrow, sendo que nome não esteja  declarada no escopo da arrow, retornará undefined.
 * 2) O problema não ocorre se declararmos a função de modo normal, como visto em `meuObjeto.prototype.falar...`
 * 
 */
obj1.falar()
obj1.grito()
console.log(obj1.nome)