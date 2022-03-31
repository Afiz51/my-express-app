"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var cookieParser = require("cookie-parser");
var logger = require("morgan");
// import usersRoutes from "./routes/users";
const usersRoutes = require("./routes/users");
const app = (0, express_1.default)();
const PORT = 9000;
app.use(logger("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/people", usersRoutes);
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
