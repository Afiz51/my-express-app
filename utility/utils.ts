const fs = require("fs");
import { IncomingMessage } from "http";

type Infos = {
  [key: string]: string | number;
};
const writeFiletoData = (fileName: string, content: Infos) => {
  fs.writeFileSync(fileName, JSON.stringify(content, null, 2), "utf8", (err: any) => {
    if (err) {
      console.log(err);
    }
  });
};  

function getPostData(req: IncomingMessage) {
  return new Promise((resolve, reject) => {
    try {
      let body: any = "";
      req.on("data", (chunk: Buffer) => {
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
