import { describe, expect, it } from "vitest";
import request from "supertest";
import { app } from "..";

describe("POST /sum", () => {
  it("should sum add 2 numbers", async () => {
    const { status, body } = await request(app)
      .post("/sum")
      .send({ a: 1, b: 2 });
    expect(status).toBe(200);
    expect(body).toEqual({ answer: 3, id: expect.any(Number) });
  });
});
