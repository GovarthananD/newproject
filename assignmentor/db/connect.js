const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://thalagoa2205:Kh6q6kSXQZvE4dQ9@cluster0.mjvfjft.mongodb.net/newDB?retryWrites=true&w=majority';
// const db = async () => {
    try{
        mongoose.connect(mongoURL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        var db = mongoose.connection;
        db.on("error", console.error.bind(console, "connection error: "));
        
        db.once("open", function () {
          console.log("Connection Successful!");
        });
    }catch(error){
        console.log('error while connecting DB',error);
    }
// }

module.exports = db;