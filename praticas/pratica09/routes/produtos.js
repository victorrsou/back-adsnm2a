const express = require('express');
const router = express.Router();
const controllerProdutos = require('../controllers/produtos');

router.post('/', controllerProdutos.validar, controllerProdutos.criar);
router.get('/', controllerProdutos.listar)

module.exports = router