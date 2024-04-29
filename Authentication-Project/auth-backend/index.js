const express = require("express");
require("dotenv").config();
const DB = require("./DB/database");
const productroute = require("./routes/productroute");
const authroute = require("./routes/authroute");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

DB();

app.use(authroute);
app.use(productroute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, () =>
  console.log("Server Running on Port", process.env.PORT)
);
