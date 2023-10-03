const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
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
    mentorAssign:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'mentor'
    } 

});

module.exports = mongoose.model('student',studentSchema);

