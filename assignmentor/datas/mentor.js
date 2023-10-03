const mongoose = require('mongoose');
const mentorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    id:{
        type:Number,
        required:true,
        trim:true,
        unique:true
    },
    mail:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    studentAssign:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'student'
    }
});

module.exports = mongoose.model('mentor',mentorSchema);