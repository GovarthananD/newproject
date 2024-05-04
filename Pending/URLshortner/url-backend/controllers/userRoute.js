import { User } from "../models/userModel.js";

export function getUserByEmail(req){
    return User.findOne({username: req.body.username})
}

export function getUserById(userId){
    return User.findById(userId).select("_id name username");
}

