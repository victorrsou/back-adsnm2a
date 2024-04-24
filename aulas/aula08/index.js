// npm init -y 
// npm install mongodb 

const { MongoClient, ObjectId } = require('mongodb');


// pegar a url, no site do mongodb -- database/connect/"vscode" -- alterar password conforme usuario criado no site mongodb!
const url = 'mongodb+srv://victor:11121991@cluster0.il1tiud.mongodb.net/';

async function conectar() {
    try {
        const mongoClient = await MongoClient.connect(url);
        // cria o banco 'loja', caso não exista
        return mongoClient.db('loja');
    } catch(error) {
        console.log("Deu ruim!", error);
    }
}

async function inserir(produto) {
    const db = await conectar();
    return db.collection('produtos').insertOne(produto);
}

async function listar() {
    const db = await conectar();
    // deixar vazio no find, sem filtro, para retornar tudo!
    return db.collection('produtos').find({}).toArray()
}

async function atualizar(id, produtoAtualizado) {
    const db = await conectar();
    // chave, sempre é  _id -- aqui o "ObjectId" é adicionado na primeira linha de código, automaticamente. set é com os parametros que serão atualizados
    return db.collection('produtos').updateOne({_id: new ObjectId(id)}, {$set: produtoAtualizado})
}

async function remover(id) {
    const db = await conectar();
    return db.collection('produtos').deleteOne({_id: new ObjectId(id)})
}

async function testar() {
    const result = await inserir({nome: 'banana', preco: 20.0});
    console.log('Produto inserido', result);

    const produtos = await listar();
    console.log('Listagem de produtos', produtos);

    // aqui, copiar o id lá do site do mongodb. de uma banana criada anteriormente
    const atual = await atualizar('66284cac54686011b4aa2ab3', {nome: "banana nanica", preco: 18.0});
    console.log("Produto atualizado", atual)

    const removido = await remover('6628510590662de67a27c3d7');
    console.log("Produto removido", removido);
}

testar();

