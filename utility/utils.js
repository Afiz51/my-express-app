"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const writeFiletoData = (fileName, content) => {
    fs.writeFileSync(fileName, JSON.stringify(content), "utf8", (err) => {
        if (err) {
            console.log(err);
        }
    });
};
function getPostData(req) {
    return new Promise((resolve, reject) => {
        try {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk.toString();
            });
            req.on("end", () => {
                resolve(body);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
module.exports = { writeFiletoData, getPostData };
