var express = require('express');
var router = express.Router();
const userController = require('../controllers/users');

router.post('/', userController.criar);

module.exports = router;
