const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age:{
        type: Intiger,
        required: true,
        trim: true
    },
    team: {
        type: String,
        required: true,
        trim: true
    }
})
module.exports = mongoose.model('users, userSchema');