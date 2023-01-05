// operator destructuring and Rest (...args)
const [l, e, ...tras] = "Breno"
console.log(l, e, tras);


// destructing objects 
const { ano, idade } = { idade: 12, ano: 23, nome: "breno" }
console.log(ano, idade)

// destructing array

const [x, y, z] = [12, 43, 5]
console.log(x, y, z);