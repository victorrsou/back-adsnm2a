const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);
let id = null;

test('Deve retornar 201 e um JSON no POST /produtos', async () => {
    const response = await request.post('/produtos').send({nome: "uva", preco: 20.0});
    expect(response.status).toBe(201);
    expect(response.type).toBe('application/json');
    expect(response.body).toHaveProperty('nome', 'uva');
    id = response.body._id;
});
test('Deve retornar 422 e um JSON no POST /produtos', async () => {
    const response = await request.post('/produtos').send({msg: 'Dados do produto inválidos'})
    expect(response.status).toBe(422);
    expect(response.type).toBe('application/json');
});
test('Deve retornar 200 e um JSON /produtos', async () => {
    const response = await request.get('/produtos');
    expect(response.type).toBe('application/json');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
})