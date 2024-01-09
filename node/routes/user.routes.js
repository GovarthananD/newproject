const express = require('express');
const { users } = require('../data'); 
const users = require('../models/user.model');  
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        users: users      
    });
});
router.get('/users/:userid', (req, res) => {
    const userid = parseInt(req.params.userid);
    const result = users.find(user => user.id === userid);    
    res.send({
        user:result
    });
})

router.post('/users', (req, res) => {
    const newUser = req.body
    const addUser = [...users, newUser];
    res.send({
        user:addUser
    });
})

router.put('/users/:userid', (req, res) => {
    const userid = parseInt(req.params.userid);
    const result = users.find(user => user.id === userid);
    const updateUser = {...result, ...req.body};
    res.send({
        user:updateUser
    })
});

router.delete('/users/:userid', (req, res) => {
    const userid = parseInt(req.params.userid);
    const result = users.filter(user => user.id !== userid);
    res.send({
        user:result
    })   
});

router.post('/router2', (req, res) => {
    res.send({message: `His Name is ${req.body.name}!`})
});

module.exports = router;