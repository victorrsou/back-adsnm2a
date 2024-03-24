const supertest = require("supertest");

const app = require("../app");

const request = supertest(app);

describe("Teste da API Produtos", () => {
    test("POST / Deve retornar 201 e um arquivo JSON", async () => {
      const novo = { nome: "uva", preco: 18.0 };
      const response = await request.post("/produtos").send(novo);
      expect(response.status).toBe(201);
      expect(response.type).toBe("application/json");
      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("nome", novo.nome);
      expect(response.body).toHaveProperty("preco", novo.preco);
    });
    test("POST / Deve retornar 422 um objeto JSON", async () => {
      const response = await request.post("/produtos");
      expect(response.status).toBe(422);
      expect(response.type).toBe("application/json");
      expect(response.body).toHaveProperty("msg", "nome e preço são obrigatórios");
    });

    test("GET / Deve retornar 200 e um arquivo JSON possuindo um array de objetos", async () => {
      const response = await request.get("/produtos");
      expect(response.status).toBe(200);
      expect(response.type).toBe("application/json");
      expect(Array.isArray(response.body)).toBe(true);
    });

    test("GET / Deve retornar 200 um objeto JSON contendo as propriedades Id, preco com os valores", async () => {
      const response = await request.get("/produtos/1");
      expect(response.status).toBe(200);
      expect(response.type).toBe("application/json");
      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("nome");
      expect(response.body).toHaveProperty("preco");
    });

    test("GET / Deve retornar 404 um objeto JSON contendo a propriedades msg", async () => {
      const response = await request.get("/produtos/100");
      expect(response.status).toBe(404);
      expect(response.type).toBe("application/json");
      expect(response.body).toHaveProperty("msg", "produto não encontrado");
    });

    test("PUT / Deve retornar 200 um objeto JSON  contendo as propriedades atualizadas", async () => {
      const atual = { nome: "uva globo", preco: 20.0 };
      const response = await request.put("/produtos/1").send(atual);
      expect(response.status).toBe(200);
      expect(response.type).toBe("application/json");
      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("nome", atual.nome);
      expect(response.body).toHaveProperty("preco", atual.preco);
    });

    test("PUT / Deve retornar 404 um objeto JSON contendo propriedade msg", async () => {
      const response = await request.put("/produtos/100");
      expect(response.status).toBe(404);
      expect(response.type).toBe("application/json");
      expect(response.body).toHaveProperty("msg", "produto não encontrado");
    });

    test("PUT /id deve retornar 422 um objeto JSON", async () => {
      const response = await request.put("/produtos/1");
      expect(response.status).toBe(422);
      expect(response.type).toBe("application/json");
      expect(response.body).toHaveProperty("msg", "nome e preço são obrigatórios"
      );
    });

    test("DELETE / Deve retornar 204 sem corpo", async () => {
      const response = await request.delete("/produtos/1");
      expect(response.status).toBe(204);
      expect(response.type).toBe("");
      expect(response.body).toEqual({});
    });

    test("DELETE / Deve retornar 404 um objeto JSON contendo a propriedade msg", async () => {
      const response = await request.delete("/produtos/100");
      expect(response.status).toBe(404);
      expect(response.type).toBe("application/json");
      expect(response.body).toHaveProperty("msg", "produto não encontrado");
    });
  });
