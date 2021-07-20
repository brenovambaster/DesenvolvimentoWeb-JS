const funcs = []
for (var i = 0; i < 10; i++) {

    funcs.push(function() { console.log(i) })
}

funcs[1]()
    // isso é um bug no javascript; O valor 10 é o valor quando o i sai do for