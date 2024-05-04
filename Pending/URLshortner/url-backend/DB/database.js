import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();

const DB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connected")
    }catch(error){
        console.log("error while connecting DB",error)
    }
}

export {DB};