const express = require('express');
const app = express();
const fs = require("fs");

const d = new Date();
let time = d.getTime();

fs.writeFile('flower.txt', time, function (err){
    if(err){
        return console.log(err);
    }
            console.log('Code run successfully');
        
    }
)






app.listen(3000, () => {
    console.log('App is working fine');
})