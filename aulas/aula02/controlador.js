const readline = require("readline-sync");

const Produto = require('./modelo');

const produtos = [];

function listar() {
//  produtos.forEach((produto) => console.log(produto.nome, "-", produto.preco));
  produtos.forEach((produto) => console.log(produto.toString()));

  /* outra forma de chamar a função
    produtos.forEach( function(produto) {
        console.log(produto.nome, '-',produto.preco)
    }) */
}

// arrow function
//const listar = () => {

//}

function criar() {
  const nome = readline.question("Entre com o nome do produto: ");
  const preco = readline.question("Entre com o preco do produto: ");
  //const novo = { nome, preco };
  const novo = new Produto(nome, preco);
  produtos.push(novo);
}

function buscar() {
  const nome = readline.question("Entre com o nome do produto: ");
  const busca = produtos.find((produto) => produto.nome === nome);
  if (busca) {
    //console.log(busca.nome, "-", busca.preco);
    console.log(busca.toString());
  } else {
    console.log("Produto nao localizado");
  }
}

function remover() {
  const nome = readline.question("Entre com o nome do produto: ");
  const posicao = produtos.findIndex((produto) => produto.nome === nome);
  if (posicao >= 0) {
    produtos.splice(posicao, 1);
  } else {
    console.log("Produto nao localizado");
  }
}

function atualizar() {
  const nome = readline.question("Entre com o nome do produto: ");
  const busca = produtos.find((produto) => produto.nome === nome);
  if (busca) {
    const preco = readline.question("Entre com o novo preco: ");
    busca.preco = preco;
  } else {
    console.log("Produto nao localizado");
  }
}

module.exports = { criar, listar, buscar, atualizar, remover };
