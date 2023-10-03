const express = require("express");
const router = express.Router();
const mentor = require('../datas/mentor');



router.get("/allmentor",async(req,res)=>{
    console.log("All mentors");
    try{
        const data = await mentors.find(); 
        res.status(200).json({message:'There are mentors', data});
    }catch(error){
        console.log('Error while getting data');
        res.status(400).send(error);
    }
});

router.post('/postmentor',(req,res)=>{
   try{
    let newUser = new mentor(req.body);
    console.log(req.body);
    newUser.save().then(data => {
        res.status(200).send({message:'user has been added successfully',data});
    }).catch(error=>{
        res.status(400).send({message:'error while adding user',...error});
    })
   }catch(error){
    res.send(500).send({message:'internal server error'})
   }
})

router.put('/updatementor/:id',(req,res)=>{
    try{
        mentor.findByIdAndUpdate({_id:req.params.id},{$set:req.body}).then((data)=>{
            res.send({message:'user has been updated successfully',id:data._id});
        }).catch(error => {
            res.send({message:'something error in updating'})
        })
    }catch(error){
        res.send({message:'internal server error'});
    }
})

router.delete('/deletementor/:id',(req,res)=>{
    try{
        mentor.deleteOne({_id:req.params.id}).then(data=>{
            res.send({message:'user has been deleted.'})
        }).catch(error=>{
            res.send({message:'error while deleting user'})
        })

    }catch(error){
        res.send({message:'internal server error'});
    }
})

module.exports = router;