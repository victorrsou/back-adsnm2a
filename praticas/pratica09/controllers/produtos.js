async function criar(req, res) {
    res.status(201).json({_id: 1, nome: 'uva', preco: 20.0});
};

module.exports = {criar};