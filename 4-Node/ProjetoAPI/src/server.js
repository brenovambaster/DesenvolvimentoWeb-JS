const port = 3003;
const express = require('express');
const bd = require('./bd');

const bodyParser = require('body-parser'); //^ fazer o parser e não causar erro

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/produtos', (req, res, next) => {
    res.send(bd.getTodosProdutos())
    //console.log(req);
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bd.getProduto(req.params.id))
})


app.post('/produtos', (req, res, next) => {
    const produto = bd.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const { nome, preco } = req.body;
    const produto = bd.salvarProduto({
        id: req.params.id,
        nome, preco
    })
    res.send(produto);
})

app.delete('/produtos/:id', (req, res, next) => {
    bd.excluirProduto(req.params.id);
    res.send(bd.getTodosProdutos())
})
app.listen(port, () => {
    console.log(`Server start, port: ${port}`);
})