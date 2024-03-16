const express = require('express');

const router = express.Router();

produtos = [{id: 1, nome: "uva verde", preco: 18.00}];

router.get("/produtos", (req, res) => {
    res.json(produtos);
});

router.get("/produtos/:produtoId", (req, res) => {
    const encontrado = produtos.find((produto) => produto.id == req.params.produtoId);
    if (!encontrado) {
        res.status(404).json({msg: "Produto não encontrado."});
        return;
    }
    res.json(encontrado);
});

router.post("/produtos", (req, res) => {
    if(!req.body || !req.body.nome || !req.body.preco) {
        res.status(422).json({msg: "O nome e/ou preco são obrigatórios."});
        return;
    }

    const novo = {id: produtos.lenght + 1, nome: req.body.nome, preco: req.body.preco};
    produtos.push(novo);
    res.status(201).json(novo);
});

router.put("/produtos/:produtoId", (req, res) => {
    const encontrado = produtos.find((produto) => produto.id == req.params.produtoId);

    if (!encontrado) {
        res.status(404).json({msg: "Produto não encontrado."});
        return;
    }

    encontrado.nome = req.body.nome;
    encontrado.preco = req.body.preco;

    res.json(encontrado)
});

router.delete("/produtos/:produtoId", (req, res) => {
    const indiceEncontrado = produtos.findIndex((produto) => produto.id == req.params.produtoId);

    if (indiceEncontrado < 0) {
        res.status(404).json({msg: "Produto não encontrado."});
        return;
    };

    produtos.splice(indiceEncontrado, 1);
    res.status(204).end();
})



module.exports = router;