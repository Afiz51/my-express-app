"use strict";
// import { executionAsyncId, executionAsyncResource } from "async_hooks";
// import { isTypedArray } from "util/types";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const request = require("supertest");
const globals_1 = require("@jest/globals");
// const usersRoutes = require("../routes/users");
const usersRoutes = require("../routes/users");
const app = express();
app.use(express.json());
app.use("/people", usersRoutes);
(0, globals_1.describe)("integration", () => {
    (0, globals_1.test)("Get  all the user - success - all user", () => __awaiter(void 0, void 0, void 0, function* () {
        //   await request(app).get("/people")
        const { body, statusCode } = yield request(app).get("/people");
        (0, globals_1.expect)(body).toEqual(globals_1.expect.arrayContaining([
            globals_1.expect.objectContaining({
                id: globals_1.expect.any(String),
                organization: globals_1.expect.any(String),
                createdAt: globals_1.expect.any(String),
                updatedAt: globals_1.expect.any(String),
                products: globals_1.expect.any(Array),
                marketValue: globals_1.expect.any(String),
                address: globals_1.expect.any(String),
                ceo: globals_1.expect.any(String),
                country: globals_1.expect.any(String),
                noOfEmployees: globals_1.expect.any(Number),
                employees: globals_1.expect.any(Array),
            }),
        ]));
        (0, globals_1.expect)(statusCode).toBe(200);
    }));
    (0, globals_1.test)("Add new user", () => __awaiter(void 0, void 0, void 0, function* () {
        const { body, statusCode } = yield request(app)
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
        (0, globals_1.expect)(statusCode).toBe(201);
        (0, globals_1.expect)(body).toEqual(globals_1.expect.objectContaining({
            id: globals_1.expect.any(String),
            organization: globals_1.expect.any(String),
            createdAt: globals_1.expect.any(String),
            updatedAt: globals_1.expect.any(String),
            products: globals_1.expect.any(Array),
            marketValue: globals_1.expect.any(String),
            address: globals_1.expect.any(String),
            ceo: globals_1.expect.any(String),
            country: globals_1.expect.any(String),
            noOfEmployees: globals_1.expect.any(Number),
            employees: globals_1.expect.any(Array),
        }));
    }));
    (0, globals_1.test)("to update a user ", () => __awaiter(void 0, void 0, void 0, function* () {
        const { body, statusCode } = yield request(app).put("/people/:id").send({
            organization: "daycare",
        });
        (0, globals_1.expect)(statusCode).toBe(404);
        (0, globals_1.expect)(body).toEqual(globals_1.expect.objectContaining({
        // organization: "daycare",
        }));
    }));
    (0, globals_1.test)("DELETE a user", () => __awaiter(void 0, void 0, void 0, function* () {
        const { body, statusCode } = yield request(app).delete("/people/:id");
        (0, globals_1.expect)(statusCode).toBe(400);
        // expect(body).toEqual(`user with ${id} successfully deleted`
        // );
    }));
});
