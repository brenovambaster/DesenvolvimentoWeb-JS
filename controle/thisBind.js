const pessoa = {
    saudacao: 'bom dia',
    falar() { console.log(this.saudacao) },
    status: status = () => console.log("Status"),
    // ou assim status() { console.log("Status") }
}
pessoa.falar()
pessoa.status()

// gera undefined pois o this varia
const falar = pessoa.falar
falar()

// Para resolver esse problema de escopo, usa-se o bind

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()