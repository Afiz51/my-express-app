"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let Info = require("../information/database.json");
const { v4: uuid } = require("uuid");
const { writeFiletoData } = require("../utility/utils");
const fs_1 = __importDefault(require("fs"));
function findAll() {
    return new Promise((resolve, reject) => {
        resolve(Info);
    });
}
function findByid(id) {
    return new Promise((resolve, reject) => {
        const indivInfo = Info.find((p) => p.id == id);
        resolve(indivInfo);
    });
}
function create(info) {
    return new Promise((resolve, reject) => {
        const newInfo = Object.assign({ id: uuid() }, info);
        Info.push(newInfo);
        writeFiletoData("./information/database.json", Info);
        resolve(newInfo);
    });
}
function upDate(id, info) {
    return new Promise((resolve, reject) => {
        const index = Info.findIndex((p) => p.id === id);
        let newDetails = (Info[index] = Object.assign({ id }, info));
        if (fs_1.default.existsSync("./information/database.json")) {
            writeFiletoData("./information/database.json", Info);
        }
        else {
            console.log("false");
        }
        resolve(Info[index]);
    });
}
const remove = (id) => {
    return new Promise((resolve, reject) => {
        Info = Info.filter((p) => p.id !== id);
        writeFiletoData("./information/database.json", Info);
        resolve();
    });
};
module.exports = {
    findAll,
    findByid,
    create,
    upDate,
    remove,
};
