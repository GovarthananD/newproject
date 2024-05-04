import express from "express";
import { User, generateToken } from "../models/userModel.js";
import { getUserByEmail } from "../controllers/userRoute.js";
import crypto from "crypto";
import bcrypt, { hash } from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.post("/register", async (req, res)=>{
    try{
        let user = await getUserByEmail(req);
        if(user){
            res.status(400).send({message:"User already exist"})
        }
        const salt = await bcrypt.genSalt(13);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        console.log(hashedPassword)

        user = await new User({
            username:req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            password: hashedPassword,
            isActive: false
        }).save();

        const token = generateToken(user._id);
        res.status(201).send({message:"User Creacted Successfully", token})

    }catch(error){
        res.status(500).send({message:"Internal Server Error"})
    }
})

router.post("/login", async (req, res) => {
    try{
        const user = await getUserByEmail(req);
        if(!user){
            res.status(404).send({message:"User doesn't exist"});
        }
        let validatePassword = false;
        if(req.body.password == user.password){
            validatePassword = true;
        }
        console.log(user, req.body, validatePassword)
        if (!validatePassword) {
            return res.status(400).send({ message: "invalid password" });
          }
          const token = generateToken(user._id);
          res.status(200).send({ message: "Logged in successfully", token });
    }catch(error){
        res.status(400).send({message:"Internal server error"})
    }
})

export const userRouter = router;