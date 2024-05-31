const crypto = require('crypto');
const jwt = require('jsonwebtoken');

async function criar(req, res) {

};

function cifrarSenha(senha, salto) {
    const hash = crypto.createHmac('sha512', salto);
    hash.update(senha);
    return hash.digest('hex');
}

function gerarToken(payload) {
    const expiresIn = 120;
    try {
        jwt.sign(payload, process.env.SEGREDO);
    } catch(err) {
        res.status(401).json({msg: 'Erro ao gerar token'});
    }
};

module.exports = {criar};

// parei na letra G, item 3 