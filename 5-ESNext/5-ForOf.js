// Itera sobre array, objetos, Map etc
// Itera sobre valores 

// Iterar sobre string 
for (let letra of "Coders") {
    console.log(letra);
}


// Forin percorre sem cima de índices
const assuntosEcma = ['Map', 'Set', 'Promise']
for (const key in assuntosEcma) {
    if (Object.hasOwnProperty.call(assuntosEcma, key)) {

        console.log("Posicao:" + key + "valor:" + assuntosEcma[key] + "\n");
    }
}

// Forof percorre sobre valores
for (const iterator of assuntosEcma) {
    console.log(iterator);
}

const assuntoMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promises', { abordado: false }]
])

// Retorna cada elemento do Map. Recebe chave e valor
for (const elemento of assuntoMap) {
    console.log(elemento);
}

// Percorrer apenas os valores
for (const valor of assuntoMap.values()) {
    console.log(valor);
}

// Percorrer apenas as chaves
for (const chave of assuntoMap.keys()) {
    console.log(chave);
}

