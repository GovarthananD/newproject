const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    mobile:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    hashedPassword:{
        type:String,
        required:true,
        trim:true,
    },
    roll:{
        type:Number,
        default:2,
        enum:[1,2]
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;