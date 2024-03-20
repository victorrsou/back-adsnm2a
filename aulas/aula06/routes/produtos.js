const express = require('express');

const produtosController = require("../controllers/controller_produtos");

const router = express.Router();

// aqui, já está dentro do '/produtos', portanto, é utilizado somente o '/''
// a função que normalmente era inserida, vai agora para o arquivo do controlador. então a 'lógica' fica dentro do controlador!

// aqui, a função é passada somente como parâmetro, portanto não é colocado o '()' dentro da função. 
router.get("/", produtosController.listarTodos);

router.get("/:produtoId", produtosController.buscarPeloId, produtosController.exibir);

router.post("/", produtosController.criar);

// atenção com a ordem das funções. primeiro busca, depois atualiza.
router.put("/:produtoId", produtosController.buscarPeloId, produtosController.atualizar);

router.delete("/:produtoId", produtosController.buscarPeloId, produtosController.remover);


module.exports = router;