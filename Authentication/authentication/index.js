const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authroute");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const connect = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database connected");
};

connect();
app.get("/", function (req, res) {
  res.send("Hello World");
});
app.use("/auth", authRoutes);
// app.use("/signin", authRoutes);
app.listen(process.env.PORT, () =>
  console.log("Server running on PORT", process.env.PORT)
);
