const express = require('express')

const app = express()

produtos = [{id: 1, nome: "uva", preco: 10.00}];

app.get("/", (req, res) => {
    res.json(produtos);
    res.status(200);
});

app.get("/:produtoId", (req, res) => {
    const encontrado = produtos.find((produto) => {produto.id === req.params.produtoId})
    if (!encontrado) {
        res.status(404).json({msg: "Produto nao encontrado"});
        return
    }
    res.json(encontrado)
});

app.post("/", (req, res) => {
    if (!req.body || !req.body.nome || !req,body.preco) {
        res.status(422).json({msg: "Nome e preco são obrigatórios"});
        return;
    }
    const novoProduto = {id: produtos.length + 1, nome: req.params.nome, preco: req.params.preco};
    produtos.push(novoProduto);
    res.status(201).send(novoProduto)
});

app.put("/:produtoId", (req, res) => {
    const produtoAlterado = produtos.find((produto) => {produto.id === req.params.produtoId});
    if (!produtoAlterado) {
        res.status(404).json({msg: "Produto não encontrado."});
        return;
    }
    produtoAlterado.nome = req.body.nome;
    produtoAlterado.preco = req.body.preco;
    res.send(produtoAlterado)
});

app.delete("/", (req, res) => {
    const indiceEncontrado = produtos.findIndex((produto) => produto.id === req.params.produtoId);
    if (indiceEncontrado < 0) {
        res.status(404).json({msg: "Produto não encontrado"});
    }
    produtos.splice(indiceEncontrado, 1);
    res.status(204).end();
})
