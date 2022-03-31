"use strict";
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
exports.updateUser = exports.deleteUser = exports.getUser = exports.createUser = exports.getUsers = void 0;
const Users = require("../models/modelController");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allUser = yield Users.findAll();
    if (!allUser) {
        res.status(404).send(`User not found`);
    }
    else {
        res.status(200).send(allUser);
    }
});
exports.getUsers = getUsers;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const { organization, products, marketValue, address, ceo, country, noOfEmployees, employees, } = req.body;
    const info = {
        organization: organization,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toDateString(),
        products: products,
        marketValue: marketValue,
        address: address,
        ceo: ceo,
        country: country,
        noOfEmployees: noOfEmployees,
        employees: employees,
    };
    let newInfo = yield Users.create(info);
    res.status(201).send(newInfo);
});
exports.createUser = createUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let info = yield Users.findByid(req.params.id);
    if (!info) {
        res.status(404).send(`User not found`);
    }
    else {
        res.status(200).send(info);
    }
});
exports.getUser = getUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`user with id ${req.params.id} has been deleted`);
    let info = yield Users.findByid(req.params.id);
    if (!info) {
        res.status(400).send(`User not found`);
    }
    else {
        yield Users.remove(req.params.id);
        res.status(200).end(`Info ${req.params.id} removed`);
    }
});
exports.deleteUser = deleteUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let info = yield Users.findByid(req.params.id);
    if (!info) {
        res.status(404).send(`infomation not found`);
    }
    else {
        const { organization, products, marketValue, address, ceo, country, noOfEmployees, employees, } = req.body;
        let infoData = {
            organization: organization || info.organization,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toDateString(),
            products: products || info.products,
            marketValue: marketValue || info.marketValue,
            address: address || info.address,
            ceo: ceo || info.ceo,
            country: country || info.country,
            noOfEmployees: noOfEmployees || info.noOfEmployees,
            employees: employees || info.employees,
        };
        let upDated = yield Users.upDate(req.params.id, infoData);
        return res.status(200).send(upDated);
    }
});
exports.updateUser = updateUser;
