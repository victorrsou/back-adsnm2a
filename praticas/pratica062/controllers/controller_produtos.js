var produtos = [];

function listarTodos(req, res) {
    // e) Faça a função listarTodos responder um JSON do array dos produtos.
    res.json(produtos)
};

function buscarPeloId(req, res) {
    // g) Faça a função buscarPeloId localizar um produto pelo id e responder um JSON do produto encontrado.
    const produtoId = req.params.produtoId;
    const produtoEncontrado = produtos.find((item) => item.id == produtoId);
    if (produtoEncontrado) {
        req.produtoEncontrado = produtoEncontrado;
        res.json(produtoEncontrado);
    } else {
        // h) Caso o produto não seja encontrado, faça a função buscarPeloId retornar o código 404 e o objeto {msg: “Produto não encontrado”}.
        res.status(404).json({msg: "produto nao encontrado"})
    }
};

function criar(req, res) {
    // j) Faça a função criar testar se têm dados no corpo da requisição. Se tiver, adicione os 
    // dados no array dos produtos. (Dica: crie uma propriedade id cujo valor é o tamanho do array + 1).

    // const {nome, preco} = req.body;
    const nome = req.body.nome;
    const preco = req.body.preco;
    
    if(nome && preco) { 
        const novoProduto = {id: (produtos.length + 1), nome, preco};
        // k) Faça a função criar responder o código de status 201 e um JSON com o produto adicionado.
        produtos.push(novoProduto);
        res.status(201).json(novoProduto);
    } else {
        // l) Se não tiver dados no corpo da requisição, faça a função criar responder o código de 
        // status 422 e o objeto {msg: “Nome e/ou preço do produto não informados”}. Verifique se passou no teste unitário.
        res.status(422).json({msg: "nome e preco sao obrigatórios"});
    }
};

function atualizar(req, res) {
    // n) Faça a função atualizar localizar um produto pelo id, atualizar os dados com os valores 
    // passados no corpo da requisição, e responder com o JSON do produto atualizado.
    const produtoId = req.params.produtoId;
    const produtoEncontrado = produtos.find((item) => item.id == produtoId);
    const nome = req.body.nome;
    const preco = req.body.preco;
    if(produtoEncontrado) {
        produtoEncontrado.nome = nome;
        produtoEncontrado.preco = preco;
        res.json(produtoEncontrado)
    } else {
        // o) Caso o produto não seja encontrado, faça a função atualizar retornar o código 404 e o 
        // objeto {msg: “Produto não encontrado”}. Verifique se passou no teste unitário.
        res.status(404).json({msg: "produto nao encontrado"});
    }

};

function remover(req, res) {
    // q) Faça a função remover localizar um produto pelo id, remover do array dos produtos e responder somente o código de status 204.
    produtoId = req.params.produtoId;
    const produtoEncontrado = produtos.find((item) => item.id == produtoId);
    if (produtoEncontrado) {
        produtos.splice(produtoEncontrado.length, 1);
        res.status(204).end();
    } else {
        // r) Caso o produto não seja encontrado, faça a função remover retornar 
        // o código 404 e o objeto {msg: “Produto não encontrado”}.
        res.status(404).json({msg: "produto nao encontrado"});
    }
}


module.exports = {atualizar,buscarPeloId,criar, listarTodos, remover};