function OBJ(a = 0, b = 0, c = 0) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.soma = function() {
        return a + b + c;
    }
}
const ob = new OBJ(1, 4, 5)
console.log(ob.soma())


const obj = { a: 1, b: 2, c: 3, soma() { return this.a + this.b + this.c } }
const ob2 = {
    a: 1,
    b: 2,
    c: 3,
    sub({ a, b, c } = ob2) { return a - b - c },
    sub2(a = ob2.a, b = ob2.b, c = ob2.c) { return a - b - c },
    sub3() { return this.a - this.b - this.c }, // deve-se se colocar o this, senão dá erro
    sub1: () => 0
}

console.log(obj.soma())
console.log(ob2.sub())
console.log(ob2.sub2())
console.log(ob2.sub3())
console.log(ob2.sub1())