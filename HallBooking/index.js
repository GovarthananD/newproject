const express = require('express');
const create = require("./createroom");
const booking = require("./bookingroom");
const allroom = require("./listallroom");
const booked = require("./booked_data");
const bookedcust = require("./howmany");
const app = express();
app.use(express.json());


app.get('/',(req,res)=>{
    res.send({message:'Hello world'});
})

app.get('/create',(req,res)=>{
    res.send({message:'Room created successfully',data:create});
})

app.post('/posting',(req,res)=>{
    res.send({message:`RoomID:201`,data:booking});
})

app.get('/allrooms',(req,res)=>{
    res.send({message:'Listed Rooms',data:allroom});
})

app.get('/booked',(req,res)=>{
    res.send({message:'Booked customers',data:booked});
})

app.get('/many',(req,res)=>{
    res.send({message:'list of booked customer',data:bookedcust});
})










app.listen(5000,()=>{
    console.log('App running successfully 5000');
})