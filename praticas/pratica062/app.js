var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// p) Abra o arquivo app.js e importe o middleware de rotas chamado routerProdutos do arquivo ./routes/produtos.js.
const routerProdutos = require('./routes/produtos');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// q) Utilize o middleware de rota routerProdutos na aplicação Express.
app.use("/produtos", routerProdutos);

module.exports = app;
