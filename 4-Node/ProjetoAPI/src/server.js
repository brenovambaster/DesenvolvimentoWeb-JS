const port = 3003;
const express = require('express');

const app = express();

app.get('/produtos', (req, res, next) => {
    res.send({ nome: "Sabao em po", qtd: 12, valor: 12.43, })
    //console.log(req);
})

app.listen(port, () => {
    console.log(`Server start, port: ${port}`);
})