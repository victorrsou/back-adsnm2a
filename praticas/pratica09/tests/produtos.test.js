const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);
let id = null;

test('Deve retornar 201 e um JSON no POST /produtos', async () => {
    const response = await request.post('/produtos').send({nome: "uva", preco: 20.0});
    expect(response.status).toBe(201);
    expect(response.type).toBe('application/json');
    id = response.body._id;
});