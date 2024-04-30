const supertest = require("supertest");

const app = require("../app");

const request = supertest(app);

// f) Crie um teste para verificar se uma chamada
// POST /produtos com um JSON { “nome”: “uva”, “preco”: 20.00 }
// retorna o status 201 e um conteúdo do tipo JSON contendo as
// propriedades id, nome e preco com os valores inseridos
// (Dica: expect(response.body).toHaveProperty(‘id’, 1);).

test("POST, retorna 201, JSON, contendo id, nome e preco com os valores", async () => {
  novo = { nome: "uva", preco: 20.0 };
  const response = await request.post("/produtos").send(novo);
  expect(response.status).toBe(201);
  expect(response.type).toBe("application/json");
  expect(response.body).toHaveProperty("id", 1);
  expect(response.body).toHaveProperty("nome", novo.nome);
  expect(response.body).toHaveProperty("preco", novo.preco);
});


// // g) Crie um teste para verificar se uma chamada GET /produtos 
// retorna o status 200 com um conteúdo do tipo JSON contendo um 
// array de objetos (Dica:. expect(Array.isArray(response.body)).toBe(true);).

test("GET, retorna 200, JSON, contendo array de objetos", async () => {
    const response = await request.get("/produtos");
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    expect(Array.isArray(response.body)).toBe(true);
});

// h) Crie um teste para verificar se uma chamada GET /produtos/1 retorna o status 200 
// e um conteúdo do tipo JSON contendo as propriedades id, nome e preco com os valores inseridos.
test("GET, retorna 200, JSON, contendo as propriedades id, nome e preco com os valores", async () => {
    const response = await request.get("/produtos/1");
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("nome");
    expect(response.body).toHaveProperty("preco");
});

// // i) Crie um teste para verificar se uma chamada GET /produtos/100 retorna o status 404
//  e um conteúdo do tipo JSON contendo a propriedade msg igual “Produto não encontrado” 
//  (Dica: expect(response.body).toHaveProperty(‘msg’, “Produto não encontrado”);).
test("GET, retorna 404, JSON contendo a propriedade msg igual 'produto não encontrado'", async () => {
    const response = await request.get("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json");
    expect(response.body).toHaveProperty("msg", "produto nao encontrado");
});


// j) Crie um teste para verificar se uma chamada POST /produtos sem um JSON e retorna o status
//  422 e um conteúdo do tipo JSON contendo a propriedade msg igual “Nome e preço do produtos são obrigatórios”.
test("POST, retorna 422, JSON contendo msg igual 'nome e preco são obrigatórios'", async () => {
    const response = await request.post("/produtos");
    expect(response.status).toBe(422);
    expect(response.type).toBe("application/json");
    expect(response.body).toHaveProperty("msg", "nome e preco sao obrigatórios");
});


// k) Crie um teste para verificar se uma chamada PUT /produtos/1 com um JSON {“nome”: “uva verde”, “preco”: 18.00} 
// retorna o status 200 e um conteúdo do tipo JSON contendo as propriedades id, nome e preco com os valores atualizados.
test("PUT, retorna 200, JSON contendo as propriedades id, nome e preco", async () => {
    const atualizado = {nome: "uva verde", preco: 18.00};
    const response = await request.put("/produtos/1").send(atualizado);
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("nome", atualizado.nome);
    expect(response.body).toHaveProperty("preco", atualizado.preco);
});


// l) Crie um teste para verificar se uma chamada PUT /produtos/100 retorna o status 404 e um 
// conteúdo do tipo JSON contendo a propriedade msg igual “Produto não encontrado”.
test("PUT, retorna 404, JSON contendo propriedade msg igual 'produto nao encontrado'", async () => {
    const response = await request.put("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json");
    expect(response.body).toHaveProperty("msg", "produto nao encontrado");
});


// m) Crie um teste para verificar se uma chamada DELETE /produtos/1 retorna o status 204 e sem conteúdo.
test("DELETE, retorna 204, sem conteudo", async () => {
    const response = await request.delete("/produtos/1");
    expect(response.status).toBe(204);
    expect(response.type).toBe("");
    expect(response.body).toEqual({});
});


// n) Crie um teste para verificar se uma chamada DELETE /produtos/100 retorna o status 
// 404 e um conteúdo do tipo JSON contendo a propriedade msg igual “Produto não encontrado”.
test("DELETE, retorna 404, JSON contendo propriedade msg igual 'produto nao encontrado'", async () => {
    const response = await request.delete("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json");
    expect(response.body).toHaveProperty("msg", "produto nao encontrado");
});





