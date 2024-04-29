const express = require('express');
const DB = require('./DB')


require('dotenv').config();

const app = express();

app.use(express.json());


DB();

app.get("/",(req, res) => {
    res.send({message:"Welcome"})
})

const PORT = process.env.PORT || 7070;

app.listen(process.env.PORT, () => console.log("Server Running on the PORT"));