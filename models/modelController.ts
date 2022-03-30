let Info = require("../information/database.json");
const { v4: uuid } = require("uuid");
const { writeFiletoData } = require("../utility/utils");
import fs from "fs";

type Infos = {
  [key: string]: string | number;
};
function findAll(): Promise<Infos> {
  return new Promise((resolve, reject) => {
    resolve(Info);
  });
}

function findByid(id: number | string): Promise<Infos> {
  return new Promise((resolve, reject) => {
    const indivInfo = Info.find((p: Infos) => p.id == id);
    resolve(indivInfo);
  });
}
function create(info: Infos | any) {
  return new Promise((resolve, reject) => {
    const newInfo = { id: uuid(), ...info };
    Info.push(newInfo);
    writeFiletoData("./information/database.json", Info);
    resolve(newInfo);
  });
}

function upDate(id: any, info: Infos | any) {
  return new Promise((resolve, reject) => {
    const index = Info.findIndex((p: any) => p.id === id);
    let newDetails = (Info[index] = { id, ...info });
    if (fs.existsSync("./information/database.json")) {
      writeFiletoData("./information/database.json", Info);
    } else {
      console.log("false");
    }
    resolve(Info[index]);
  });
}
const remove = (id: any): Promise<void> => {
  return new Promise((resolve, reject) => {
    Info = Info.filter((p: any) => p.id !== id);
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
