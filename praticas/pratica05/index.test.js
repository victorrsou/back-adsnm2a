const supertest = require('supertest');

const app = require("./index");

const request = supertest(app);

test("GET Deve retornar status 200 e um arquivo json no /produtos", async () => {
    const response = await request.get("/produtos");
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
});

test("GET Deve retornar status 200 e um arquivo json no /produtos/1", async () => {
    const response = await request.get("/produtos/1");
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
});

test("GET Deve retornar status 404 e um conteúdo json em /produtos/999", async () => {
    const response = await request.get("/produtos/999");
    expect(response.status).toBe(404);
    expect(response.headers['content-type']).toMatch(/json/);
});

test("POST Produto criado retorna status 201 e um arquivo tipo json", async () => {
    const response = await request.post("/produtos").send({nome: "uva", preco: 20.00});
    expect(response.status).toBe(201);
    expect(response.headers['content-type']).toMatch(/json/);
});

test("POST produtos sem um json retorna o status 422 e um conteudo do tipo json", async () => {
    const response = await request.post("/produtos").send({});
    expect(response.status).toBe(422);
    expect(response.headers['content-type']).toMatch(/json/)
});

test("PUT deve retornar status 200 e um json em /produtos/id", async () => {
    const response = await request.put("/produtos/1").send({nome: "uva verde", preco: 18.00});
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
});

test("PUT Verifica se a chamada PUT /produtos/999 retorna o status 404 e um conteudo tipo JSON", async () => {
    const response = await request.put("/produtos/999").send({nome: "uva verde", preco: 18.00});
    expect(response.status).toBe(404);
    expect(response.headers['content-type']).toMatch(/json/);
});

test("DELETE Deve retornar 204 e um json sem conteúdo em /produtos/id", async () => {
    const response = await request.delete("/produtos/1");
    expect(response.status).toBe(204);
    expect(response.body).toEqual({});
});

test("DELETE Verifica se a chama DELETE /produtos/999 retorna status 404 e um conteúdo do tipo json.", async () => {
    const response = await request.delete("/produtos/999")
    expect(response.status).toBe(404);
    expect(response.headers['content-type']).toMatch(/json/);
});