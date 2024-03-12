const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Voce fez uma requisicao GET");
});

app.post("/", (req, res) => {
    res.status(201).send("Você fez uma requisicao POST")
});

app.put("/", (req, res) => {
    res.status(200).send("Voce fez uma requisicao PUT")
});

app.delete("/", (req, res) => {
    res.status(204).send("Voce fez uma requisicao DELETE")
});

app.listen(3000, () => {
    console.log('API está ON!')
});

module.exports = app;