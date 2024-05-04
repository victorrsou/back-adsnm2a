const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    // trim, retira os espaços no final da String 
    // uppercase: Tudo maiúsculo, 
    // required: campo é obrigatório,
    // minLength: Mínimo de 03 caracteres
    nome: {
        type: String,
        trim: true,
        uppercase: true,
        required: [true, "Nome é obrigatório."],
        minLength: [3, "Nome deve conter pelo menos 3 caracteres."],
    },
    preco: {type: Number, min: [0, "Preco deve ser >= 0"]}, 
    // caso não exista valor inserido, a quantidade a ser inserida "padrão" é 0! 
    quantidade: {type: Number, default: 0}
});

// nome coleção, sempre singular, pois ele vai para o plural.
module.exports = mongoose.model('Produto', produtoSchema);