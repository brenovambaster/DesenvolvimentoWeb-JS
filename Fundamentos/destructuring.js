const pessoa = {
        nome: 'Ana',
        idade: 12,
        endereco: {
            rua: 'Vital',
            numero: 23
        },
        pai: "breno"
    }
    // a variavel aqui deve ter o msm nome da chaev do obj;
const { nome, idade, endereco, pai } = pessoa;
console.log(nome, idade);

// caso queira mudar o nome da variavel;
const { nome: n, idade: i } = pessoa;
console.log(n, i);

// caso nao tem esse atributo no obj; valor padrao para caso nao exisa
const { sobrenome = "nao especificado", humor = true } = pessoa;
console.log(sobrenome, humor)

// obj dentro de obj;
// const { endereco: { rua: ru, numero: num } } = pessoa ou ...
const { endereco: { rua, numero } } = pessoa;
console.log(rua, numero)