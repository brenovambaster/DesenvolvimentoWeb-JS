const fs = require('fs')
const caminho = __dirname + '/arquivoLeitura.json'

// * sincrono : não é recomendado utilizar esse método síncrono
const conteudo = fs.readFileSync(caminho, 'utf-8');
//console.log(conteudo);

// * assíncrono: melhor maneira de trabalhar com leitura de arquivos
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    if (err)
        return console.log("Falha ao abrir o arquivo : " + err);
    const config = JSON.parse(conteudo);
    console.log(`${config.db.host} : ${config.db.port}`);

})