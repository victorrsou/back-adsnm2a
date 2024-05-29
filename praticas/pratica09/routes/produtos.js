const express = require('express');
const router = express.Router();
const controllerProdutos = require('../controllers/produtos');

router.post('/', controllerProdutos.criar);

module.exports = router