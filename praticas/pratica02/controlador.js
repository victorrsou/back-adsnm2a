const contato = require('./modelo');


contatos = []

function adicionarContato(nome, email, telefone) {
    const novoContato = new contato(nome, email, telefone);
    contatos.push(novoContato);
}

function listarContatos() {
    return contatos
}

function buscarContato(nome) {
    const busca = contatos.find((contato) => contato.nome === nome);    
    return busca
}

function atualizarContato(nome, email, telefone) {
    const busca = buscarContato(nome)
    if (busca) {
        busca.nome = nome;
        busca.email = email;
        busca.telefone = telefone;
    }
}

function removerContato(nome) {
    const posicao = contatos.findIndex((contato) => contato.nome === nome);
    if (posicao >= 0) {
        contatos.splice(posicao, 1)
    } else {

    }
}

module.exports = {adicionarContato, listarContatos, buscarContato, atualizarContato, removerContato};