require('dotenv').config();
const mongoose = require('mongoose');
const Produto = require('./modelo');

const url = process.env.MONGODB_URL;

async function main() {
    try {
        await mongoose.connect(url);
        console.log("OK");
    } catch (err) {
        console.log("Deu ruim!", err.message)
    }

    // // forma tradicional de adicionar um produto 
    const produto = new Produto({
        nome: "maçã",
        preco: 12,
        quantidade: 5
    });
    try{
        await produto.save();
        console.log(produto);
    } catch (err) {
        // forma de capturar a mensagem de erro, caso de erro
        for(let key in err.errors) {
            console.log(err.errors[key].message);
        }  
    }

    const produto = await Produto.create({
        nome: "uva",
        preco: 32.2,
        quantidade: 10
    });
    console.log(produto);

    // inserir N produtos 
    const produtos = await Produto.insertMany([
        {nome: "abacaxi", preco: 20.7, quantidade: 8},
        {nome: "pera", preco: 20.7, quantidade: 4},
        {nome: "laranja", preco: 20.7, quantidade: 7},
    ]);
    console.log(produtos);

    // consultar 1 produto 
    const produto = await Produto.findOne({ nome: "abacaxi"});
    console.log(produto);

    // consultar N produtos 
    const produtos = await Produto.find({ nome: "banana"});
    console.log(produtos);

    const produto = await Produto.findOneAndUpdate(
        { nome: "banana" },
        { nome: "banana nanica", preco: 15.0, quantidade: 20}
    );


    
    // devolve o status do objeto ANTES de alterar! 
    const result = await Produto.updateOne({nome: "banana"}, {nome: "banana", preco: 200, quantidade: 200});
    
    const result = await Produto.updateOne(
        {nome: "uva"},
        {nome: "uva globo", preco: 19.0, quantidade: 5}
    );
    
    const produto = await Produto.findOneAndDelete({nome: "uva"});
    
    // deleta vários 
    const produtosApagados = await Produto.deleteMany({nome: "uva"});
    
    console.log(produto)

    await mongoose.disconnect();
}

main();

// adicionar o pacote dotenv para adicionar informações sensíveis como senha ou usuário
// automaticamente o arquivo ".env" por padrão não é incluído para ser enviado para o GitHub por exemplo.  

// __v: 0
// significa a versão do produto que está sendo adicionado no banco. Caso exista futuras modificações no banco, como adicionar uma coluna, o "__v" é atualizado. 