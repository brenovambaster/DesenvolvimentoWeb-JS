const fs = require("fs");
const { json } = require("stream/consumers");

const produto = {
    nome: "Arroz",
    qtd: 12,
    peso: 1,
    fabricante: "Cristália"
}

fs.writeFile(__dirname + "/arquivoGerado.json", JSON.stringify(produto), (err) => {
    if (err)
        console.log(err)
})