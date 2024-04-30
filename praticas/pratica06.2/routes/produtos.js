const express = require('express');

const controllerProdutos = require('../controllers/controller_produtos');

const router = express.Router();

// e) Declare um middleware de rota para responder ao método GET na URL /produtos.
// f) Faça o middleware de rota chamar a função listarTodos do controllerProdutos.
router.get("/", controllerProdutos.listarTodos);


// g) Declare um middleware de rota para responder ao método GET na URL /produtos/:produtoId.
// h) Faça o middleware de rota chamar a função buscarPeloId do controllerProdutos.
router.get("/:produtoId", controllerProdutos.buscarPeloId);


// i) Declare middleware de rota para responder ao método POST na URL /produtos.
// j) Faça o middleware de rota chamar a função criar do controllerProdutos.
router.post("/", controllerProdutos.criar);


// k) Declare middleware de rota para responder ao método PUT na URL /produtos/:produtoId.
// l) Faça o middleware de rota chamar a função atualizar do controllerProdutos.
router.put("/:produtoId", controllerProdutos.atualizar);


// m) Declare middleware de rota para responder ao método DELETE na URL /produtos/:produtoId
// n) Faça o middleware de rota chamar a função remover do controllerProdutos.
router.delete("/:produtoId", controllerProdutos.remover);


// o) Exporte a instância de Router para outros módulos do projeto. 
module.exports = router;

