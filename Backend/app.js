const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectToDb = require("./db/db");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");

connectToDb();
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);

module.exports = app;
