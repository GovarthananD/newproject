import express from "express";
import {client} from "../index.js";
const router = express.Router();

router.post("/", async (req,res) => {
    const newMovie = req.body;
    const result = await client
    .db("moviesworld")
    .collection("movies")
    .insertMany(newMovie);
    res.send(result);
});

router.get("/", async (req,res) => {
    const result = await client
    .db("moviesworld")
    .collection("movies")
    .find({})
    .toArray();
    res.send(result);
});

router.get("/:id", async (req,res) => {
    const {id} = req.params;
    const result = await client
    .db("moviesworld")
    .collection("movies")
    .findOne({id:id})
    result ? res.send(result) : res.status(404).send({message:"Movie Not Found"})
});

router.delete("/:id", async (req,res) => {
    const {id} = req.params;
    const result = await client
    .db("moviesworld")
    .collection("movies")
    .deleteOne({id:id})
    result ? res.send(result) : res.status(404).send({message:"Movie Not Found"})
});

router.put("/:id", async (req,res) => {
    const {id} = req.params;
    const updatedMovie = req.body;
    
    const result = await client
    .db("moviesworld")
    .collection("movies")
    .updateOne({id:id}, {$set: updatedMovie});
    res.send(result)
});

export const moviesRouter = router;