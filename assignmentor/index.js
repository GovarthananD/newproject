const express = require("express");
const DB = require("./database");
require("dotenv").config();
const cors = require("cors");
const studentRoute = require("./student");
const mentorRoute = require("./mentor");
const assignmentor = require("./assignMentorStudent");

const app = express();
app.use(express.json());
app.use(cors());

DB();

app.use(studentRoute);
app.use(mentorRoute);
app.use(assignmentor);

app.get("/", (req, res) => {
  res.send("Hello Everyone");
});

app.listen(process.env.PORT, () => {
  console.log("Server Running on PORT", process.env.PORT);
});
