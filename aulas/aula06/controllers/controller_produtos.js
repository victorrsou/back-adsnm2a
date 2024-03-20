const produtos = [];

// aqui, nas funções, todas elas terão o request(req) e response(res). middleware
function listarTodos(req, res) {
    res.json(produtos);
};

function exibir(req, res) {
    const { produtoEncontrado } = req;
    res.json(produtoEncontrado);
}

function buscarPeloId(req, res, next) {
    // desestruturação do objeto 
    const {produtoId} = req.params; // {chave1: valor1, chave2: valor2}
    const produtoEncontrado = produtos.find(item => item.id == produtoId);
    if (produtoEncontrado) {
        // se você não coloca o código, o padrão é 200 
        // res.json(produtoEncontrado);
        req.produtoEncontrado = produtoEncontrado;
        next();
    } else {
        res.status(404).json({msg: "Produto não encontrado."});
    }
};

function criar(req, res) {
    const {nome, preco} = req.body;
    const produtoNovo = {id: produtos.length+1, nome, preco };
    produtos.push(produtoNovo);
    res.status(201).json(produtoNovo);
};

function atualizar(req, res) {
    const {nome, preco} = req.body;
    const {produtoEncontrado} = req;
    produtoEncontrado.nome = nome;
    produtoEncontrado.preco = preco;
    res.json(produtoEncontrado);
};

function remover(req, res) {
    const {produtoId} = req.params;
    const posicao = produtos.findIndex(item => item.id == produtoId);
    if (posicao >= 0) {
        // arranca um elemento do array 
        produtos.splice(posicao, 1);
        res.status(204).end();
    }
};

// exporta para poder utilizar no router 
module.exports = {listarTodos, buscarPeloId, criar, atualizar, remover, exibir};