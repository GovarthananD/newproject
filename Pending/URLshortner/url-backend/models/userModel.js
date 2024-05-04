import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim: true,
        unique: true
    },
    firstname:{
        type:String,
        required:true,
        trim: true
    },
    lastname:{
        type:String,
        required:true,
        trim: true
    },
    password:{
        type:String,
        required:true,
        trim: true
    },
    isActivate:{
        type:Boolean,
    }
});

const User = mongoose.model("User", userSchema);
const generateToken = (id) => {
    return jwt.sign({id}, process.env.SECRET_KEY);
}

export {User, generateToken};