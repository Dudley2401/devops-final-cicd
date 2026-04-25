const request = require("supertest");
const app = require("../src/app");

describe("DevOps CI/CD Final Project", () => {
  test("GET / debe responder con la página principal", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("Proyecto Final");
    expect(response.text).toContain("DevOps CI/CD");
  });

  test("GET /health debe responder con estado ok", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("ok");
    expect(response.body.message).toBe("Application is running successfully");
  });
});