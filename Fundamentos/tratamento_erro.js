function ThrowError(erro) {
    throw obj = {
        name: erro.name,
        message: erro.message
    }
}

function printMsg(obj) {
    let { name, message } = obj;
    console.log('Detalhes do erro: \n' + 'Name:' +
        name, '\nMessage: ' + message)
}








function printNameUperCase(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        ThrowError(e)
    }

}


try {
    printNameUperCase({ nome: "Breno" })
} catch (error) {
    printMsg(error)
}