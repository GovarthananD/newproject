const express = require('express');
const {users} = require('./data');

const app = express();
app.use(express.json());

app.get('/users',(req, res) => {
    res.send({
        users
    })
});

app.get('/users/:userid',(req, res) => {
    const userId = parseInt(req.params.userid);
    const userfound = users.find(user => user.id === userId);
    console.log('Req.params;',req.params);
    res.send({
        message:"users have been retrived successfully",
        users:userfound
    })
});

app.post('/greeting', (req, res) => {
    res.send({message:`Welcome to the dev world MR.${req.body.name}!`})
})

app.post('/users', (req, res) => {
    const newuser = req.body;
    const updateuser = [...users,newuser];
    res.send({
        message:"user has been retrived successfully",
        users:updateuser
    })
});

app.put('/users/:userid', (req, res) => {
    const userId = parseInt(req.params.userid);
    const userfound = users.find(user => user.id === userId);
    const edituser = {...userfound,...req.body};
    res.send({
        message:'User edit has been successfully',
        users:edituser
    })
})

app.delete('/users/:userid', (req, res) => {
    const userId = parseInt(req.params.userid);
    const deluser = users.filter(user => user.id !== userId);
    res.send({
        message:'User has been deleted successfully',
        users:deluser
    })
})


app.listen(3000, () => {
    console.log('App is working fine by port 3000')
})