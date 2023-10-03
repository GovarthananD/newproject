//const express = import('express');
import express from 'express';
const router = express.Router() ;//express.Router();
//const bcrypt = import('bcrypt');
import bcrypt from 'bcrypt';
import Users from "../models/user-model";




router.post('/register',async (req,res)=>{
try{
    const payload = req.body;
    if(!payload.password){
        return res.status(400).send({message:'Password is Mandatory'})
    }
    const hashedValue = await bcrypt.hash(payload.password,13);
    
    payload.hashedPassword = hashedValue;
    delete payload.password;
    console.log(payload)
    const newUser = new Users(payload)

   
    newUser.save().then(data =>{
        res.status(201).send({message:'User Registration Successfull', userId:data._id});
    }).catch(error =>{
        res.status(400).send({message:'Error while registering'});
    })
}catch(error){
    res.status(500).send({message:'Internal Server Error'});
}
});
router.post('/signin',(req,res)=>{
    try{

    }catch(error){
        res.status(500).send({message:'Internal Server Error'});
    }
});
router.post('/register',(req,res)=>{
    try{

    }catch(error){
        res.status(500).send({message:'Internal Server Error'});
    }
});
router.get('/signout',(req,res)=>{
    try{

    }catch(error){
        res.status(500).send({message:'Internal Server Error'})
    }
});
router.post('/forgot-password',(req,res)=>{
    try{

    }catch(error){
        res.status(500).send({message:'Internal Server Error'})
    }
});

export default router;