// import express from 'express';
// import {v4:uuid} from 'uuid';
// const router = express.Router();
// const app = express();

// const PORT = process.env.PORT || 3000;
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.listen(PORT);

import express from "express";
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// import usersRoutes from "./routes/users";
const usersRoutes = require("./routes/users");
const app = express();
const PORT = 5000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/people", usersRoutes);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
