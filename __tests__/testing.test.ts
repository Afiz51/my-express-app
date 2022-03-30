// import { executionAsyncId, executionAsyncResource } from "async_hooks";
// import { isTypedArray } from "util/types";

const express = require("express");
const request = require("supertest");
import { expect, test, describe } from "@jest/globals";

// const usersRoutes = require("../routes/users");
const usersRoutes = require("../routes/users");

const app = express();
app.use(express.json());
app.use("/people", usersRoutes);

describe("integration", () => {
  test("Get  all the user - success - all user", async () => {
    //   await request(app).get("/people")
    const { body, statusCode } = await request(app).get("/people");
    expect(body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          organization: expect.any(String),
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          products: expect.any(Array),
          marketValue: expect.any(String),
          address: expect.any(String),
          ceo: expect.any(String),
          country: expect.any(String),
          noOfEmployees: expect.any(Number),
          employees: expect.any(Array),
        }),
      ])
    );
    expect(statusCode).toBe(200);
  });

  test("Add new user", async () => {
    const { body, statusCode } = await request(app)
      .post("/people")
      .send({
        organization: "node9758",
        products: ["developers", "pizza"],
        marketValue: "90%",
        address: "sangotedo",
        ceo: "cn",
        country: "Taiwan",
        noOfEmployees: 2,
        employees: ["james bond", "jackie chan"],
      });
    expect(statusCode).toBe(201);
    expect(body).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        organization: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        products: expect.any(Array),
        marketValue: expect.any(String),
        address: expect.any(String),
        ceo: expect.any(String),
        country: expect.any(String),
        noOfEmployees: expect.any(Number),
        employees: expect.any(Array),
      })
    );
  });
  test("to update a user ", async () => {
    const { body, statusCode } = await request(app).put("/people/:id").send({
      organization: "daycare",
    });
    expect(statusCode).toBe(404);
    expect(body).toEqual(
      expect.objectContaining({
        // organization: "daycare",
      })
    );
  });
  test("DELETE a user", async () => {
    const { body, statusCode } = await request(app).delete("/people/:id");
    expect(statusCode).toBe(400);
    // expect(body).toEqual(`user with ${id} successfully deleted`

    // );
  });
});
