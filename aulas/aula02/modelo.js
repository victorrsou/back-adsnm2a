class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    toString() {
        return `${this.nome}-${this.preco}`;
    }
}

// produto = new Produto("banana", 25.00)

module.exports = Produto;