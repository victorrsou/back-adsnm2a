// npm install --save-dev nodemon (modo desenvolvedor, para atualizar automaticamente o thunderclient) 
// npm install --save-dev jest supertest (modo desenvolvedor, para testes "thunder client no terminal") 

// importar framework express
const express = require('express');

// cria aplicação express 
const app = express();

// middleware, "express retira dados do json e joga nas variáveis"
// middleware integrado 
app.use(express.json());

// middleware de aplicação 
app.use(function(req, res, next){
    console.log("Data ", new Date());
    next();
});

// middlware de rota 
app.get("/", function(req, res) {
    console.log("URL = ", req.url);
    console.log("Metodo = ", req.method);
    console.log("Cabecalho = ",req.headers);
    console.log("Parametros = ", req.params);
    console.log("Corpo = ", req.body);
    res.status(200).send("Olá");
});

app.post("/", function(req, res){
    console.log(req.body);
    res.json({status: "200", message: "Sucesso"});
});

app.put("/", function(req, res) {
    res.status(204).end();
});

app.delete("/", function(req, res){
    throw new Exception();
});

// middleware de erro 
app.use(function(error, req, res, next){
    res.status(400).send("Deu ruim!");
});

// inicializar aplicação 
app.listen(3000, function(){
    console.log('API está ON!');
});

// exporta o app para joga-lo no arquivo de teste 
module.exports = app;