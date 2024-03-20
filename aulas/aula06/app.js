// comando, npx express-generator --no-view aula06
// após, escrever no terminal dentro da pasta aula06, npm install
// apagar a pasta public e os arquivos dentro dapasta routes 
// criar a pasta controllers

// APAGAR as linhas 
// var path = require('path');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// adicionada \/
const produtosRouter = require('./routes/produtos');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// \/
app.use('/produtos', produtosRouter);

module.exports = app;
