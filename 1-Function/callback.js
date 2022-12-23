const fabricantes = ['mercedes', 'ford', 'toyota'];

imprimir = (nome, indice) => console.log(`${indice + 1}.${nome}`)

// aqui a callback; Para cada itereação ele executa uma função passada por parâmetro
fabricantes.forEach(current_value => {
    return console.log(`${current_value}`);
});