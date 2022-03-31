import express from "express";
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// import usersRoutes from "./routes/users";
const usersRoutes = require("./routes/users");
const app = express();
const PORT = 9000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/people", usersRoutes);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`),
);
