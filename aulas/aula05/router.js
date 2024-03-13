const express = require('express');

// middleware de rota 
const router = express.Router();

const produtos = [{id: 1, nome: "Uva", preco: 10.00}]

router.get("/produtos", (req, res) => {
    // garante que será enviado um JSON 
    res.json(produtos);
});

router.get("/produtos/:produtoId", (req, res) => {
    const encontrado = produtos.find((produto) => produto.id == req.params.produtoId);

    if (!encontrado) {
        res.status(404).json({msg: "Produto não encontrado"});
        return;
    }

    res.json(encontrado);
});

router.post("/produtos", (req, res) => {
    if (!req.body || !req.body.nome || !req.body.preco) {
        res.status(422).json({msg: "Nome e/ou preco do produto obrigatório"});
        return;
    }
    // "gambiarra", gerar id novo 
    const novo = {id: produtos.length+1, nome: req.body.nome, preco: req.body.preco};
    produtos.push(novo);
    res.status(201).json(novo);
});

router.put("/produtos/:produtoId", (req, res) => {
    const encontrado = produtos.find((produto) => produto.id == req.params.produtoId);

    if (!encontrado) {
        res.status(404).json({msg: "Produto não encontrado"});
        return;
    }

    encontrado.nome = req.body.nome;
    encontrado.preco = req.body.preco;

    res.json(encontrado);
});

router.delete("/produtos/:produtoId", (req, res) => {
    const posicao = produtos.findIndex((produto) => produto.id == req.params.produtoId)

    if (posicao < 0) {
        res.status(404).json({msg: "Produto não encontrado"});
        return;
    }

    produtos.splice(posicao, 1);
    res.status(204).end();
});


module.exports = router;