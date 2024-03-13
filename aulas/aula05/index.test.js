const supertest = require('supertest')

const app = require('./index');

const request = supertest(app);

describe('Teste da API /produtos', () => {
    test('Deve retornar 200 e um JSON no GET /produtos', async () => {
        const response = await request.get("/produtos");
        expect(response.status).toBe(200);
        // procurar por arquivos JSON
        expect(response.headers['content-type']).toMatch(/json/);
    })

    test('Deve retornar 200 e um JSON no GET /produtos/id', async () => {
        const response = await request.get("/produtos/1");
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
    })

    test('Deve retornar 404 e um JSON no GET /produtos/id', async () => {
        const response = await request.get("/produtos/10000");
        expect(response.status).toBe(404);
        expect(response.headers['content-type']).toMatch(/json/);
    })

    test('Deve retornar 201 e um JSON no POST /produtos', async () => {
        const response = await request.post("/produtos").send({nome: "Banana", preco: 15.00});
        expect(response.status).toBe(201);
        expect(response.headers['content-type']).toMatch(/json/);
    })

    test('Deve retornar 422 e um JSON no POST /produtos', async () => {
        const response = await request.post("/produtos").send({});
        // unidade não processada, falta adicionar nome" 
        expect(response.status).toBe(422);
        expect(response.headers['content-type']).toMatch(/json/);
    })

    test('Deve retornar 200 e um JSON no PUT /produtos/id', async () => {
        const response = await request.put("/produtos/1").send({nome: "Uva globo", preco: 21.00});
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
    })

    test('Deve retornar 404 e um JSON no PUT /produtos/id', async () => {
        const response = await request.put("/produtos/10000").send({nome: "Uva globo", preco: 21.00});
        expect(response.status).toBe(404);
        expect(response.headers['content-type']).toMatch(/json/);
    })

    // 204 retorna sem conteúdo, vazio 
    test('Deve retornar 204 e um JSON no DELETE /produtos/id', async () => {
        const response = await request.delete("/produtos/1");
        expect(response.status).toBe(204);
        expect(response.body).toEqual({});
    })

    test('Deve retornar 404 e um JSON no DELETE /produtos/id', async () => {
        const response = await request.delete("/produtos/10000");
        expect(response.status).toBe(404);
        expect(response.headers['content-type']).toMatch(/json/);
    })
});

