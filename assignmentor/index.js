const express = require('express');
const mentorroute = require('./routes/mentorroute');
const studentroute = require('./routes/studentroute');


const db = require('./db/connect');


const app = express();
app.use(express.json());
app.use("/allstudent",studentroute)
app.use("/allmentor",mentorroute)

app.get('/',(req,res)=>{
    res.send({message:'Application working fine'})
})










app.listen(4000,()=>{
    console.log('App working fine by 4000');
})