// funcao construtora
function Produto(name, desc = 0, preco = 0) {
    this.name = name;
    let prec1;
    (() => {
        this.name = name;
        desc = desc;
        prec1 = preco
    })()
    this.falar = () => {
        console.log("I am speaking" + name)
    }
    this.getName = () => { console.log("NAME: " + this.name) }
    this.setName = (name) => { this.name = name }
    this.getDesc = () => { console.log("DESC " + desc) }
    this.getPrec = () => { console.log("Prec " + prec1) }
    this.setPrec = (prec) => { prec1 = prec }
}
const p1 = new Produto("TEste", 12, 23)
p1.falar()
p1.getName();
p1.setName("BRENO")
p1.getName()
p1.getDesc()
    // p1.setPrec(23)
p1.getPrec()


// usando a notação literal
const obj = {}
console.log(obj)

//Object em JS
const obj2 = new Object


//Funcoes Construtoras