import express from "express";
import * as dotenv from "dotenv";
import {MongoClient} from "mongodb";
import { moviesRouter } from "./routes/movies.js";
import cors from 'cors';




const app = express();
dotenv.config();
app.use(express.json());
app.use(cors())
const PORT = 8000;
const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("MongoDb is Connected");
    return client;
}
export const client = await createConnection();

app.get("/",(req,res) => {
    res.send("Hello World");
});

app.use("/movies",moviesRouter)
app.listen(PORT,()=> console.log("Server Started on PORT",PORT));