const anonimo = process.argv.indexOf('-a') !== -1 // -> verifica se a flag `a` foi passada
console.log(anonimo)

if (anonimo) {
    console.log("Fala Anônimo")
    process.exit()
} else {
    // se a flag anonimo for false, pede para falar o nome
    process.stdout.write("Informe seu nome:")
    process.stdin.on('data', (data) => {
        const nome = data.toString().replace('\n', '')
        process.stdout.write('Fala ' + nome + '\n')
        process.exit()
    })
}
