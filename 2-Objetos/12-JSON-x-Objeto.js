const obj = { a: 1, b: 2, c: 3, soma() { return this.a + this.b + this.c } }
const ob2 = { a: 1, b: 2, c: 3, soma: () => { return this.a + this.b + this.c } }
console.log(JSON.stringify(obj)) // funcoes nao entram em obj
console.log(JSON.stringify(ob2)) // funcoes nao entram em obj

// Para cirar um JSON para obj, os atributos devem estar contidos por "" duplas, bem como valores STRINGS ex: "nome":"Breno"
console.log(JSON.parse('{"a":1, "b":2,"nome":"Breno"}')) // retorna um obj