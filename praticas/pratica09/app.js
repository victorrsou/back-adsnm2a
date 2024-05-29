require('dotenv').config();
const mongoose = require('mongoose');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const routerApidocs = require('./routes/apidocs');
const routerProdutos = require('./routes/produtos');

mongoose.connect(process.env.MONGODB_URL);

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/apidocs', routerApidocs);
app.use('/produtos', routerProdutos);

module.exports = app;
