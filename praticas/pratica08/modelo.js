const conectarDb = require('./database');

class Contato {
    constructor(id, nome, email, telefone) {
        this.id = null
        this.nome = nome,
        this.email = email,
        this.telefone = telefone
    }
}

async function inserir(contato) {
    const db = await conectarDb()
    const collection = db.collection('contatos')
    var result = collection.insertOne({id:result.insertedId, nome:contato.nome, email:contato.email, telefone:contato.telefone})
}

async function alterar(contato) {
    const db = await conectarDb();
    const collection = db.collection('contatos');
    collection.updateOne({_id: contato.id}, {$set: {nome: contato.nome, email:contato.email, telefone:contato.telefone }});
}

async function deletar(contato) {
    const collection = db.collection('contatos');
    collection.deleteOne({nome: contato.nome});
}

async function buscar(contato) {
    const db = await conectarDb();
    const collection = db.collection('contatos');
    var result = collection.findOne({nome: contato.nome})
    contato.nome = result.nome
    contato.email = result.email
    contato.telefone = result.telefone
    contato.id = result.id
}

module.exports = {inserir, alterar, deletar, buscar}
