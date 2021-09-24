function fun() { console.log("OPA") }

// func dentro da variavel

const fun2 = function(a, b) {}

// func em array
const array = [function(a, b) { return a }, function(x, v) { return x + 2 }]
console.log(array[0](2, 3))

// func em obj

const obj = {};
obj.falar = function() {
    return "OIii"
}

console.log(obj.falar())

// passar func por parametro para outra;

function run(fun) {
    fun();
}
run(function() { console.log("executando") })
run(fun)


// funcao retorna outra funcao

function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma(1, 2)(3)