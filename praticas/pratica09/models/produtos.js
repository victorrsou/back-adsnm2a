const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    nome: {type: String},
    preco: {type: Number}
});

module.exports = mongoose.model("Produto", produtoSchema);