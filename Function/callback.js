const fabricantes = ['mercedes', 'ford', 'toyota'];

imprimir = (nome, indice) => console.log(`${indice + 1}.${nome}`)

// aqui o callback
fabricantes.forEach(a => {
    return console.log(`${a}`);
});