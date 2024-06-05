const mongoose = require('mongoose');
const Produto = require('../models/produtos');

async function criar(req, res) {
    const produto = await Produto.create(req.body);
    res.status(201).json(produto);
};

async function validar(req, res, next) {
    const produto = new Produto(req.body);
    try {
        await produto.validate();
        next();
    } catch(err) {
        res.status(422).json({msg: "Dados do produto inválidos"});
    }
};

async function listar(req, res) {
    const produtos = await Produto.find({});
    res.json(produtos)
};

module.exports = {criar, validar, listar};