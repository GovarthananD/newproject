const mongoose = require('mongoose');

const DB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('DB Connected');
    }catch(error){
        console.log("Error while connecting DB", error);
    }
}

module.exports = DB;

