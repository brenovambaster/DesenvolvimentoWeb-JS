
function data_nascimento() {
    console.log("10/12/2001")
}
// maneira mais indicada para se exportar 
module.exports = {
    nome: 'breno',
    idade: 12,
    sexo: 'm',
    nome_br() {
        return this.nome
    }, data_nascimento
}