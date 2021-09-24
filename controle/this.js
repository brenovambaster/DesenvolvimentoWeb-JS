const pessoa = {
    saudacao: 'bom dia',
    falar() {
        console.log(this.saudacao)
    }

}
pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre parafigma funcional e OO

falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()