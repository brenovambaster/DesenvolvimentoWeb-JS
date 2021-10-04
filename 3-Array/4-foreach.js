const aprovados = ['breno', 'vitor', 'lucas', 'ana']

aprovados.forEach((nome, i) => {
    console.log(`nome:${nome} indice:${i}`)
});

console.log("-------------------")

const exibirAprovados = (nome, i) => console.log(`nome ${nome} indice ${i}`)
aprovados.forEach(exibirAprovados);