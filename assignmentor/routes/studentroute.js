const express = require("express");
const router = express.Router();
const student = require ("../datas/student") 

router.get("/allstudent",async(req,res)=>{
    console.log("All students");
    try{
        const data = await student.find();
        res.status(200).json({message:'successfull',data});
    }catch(error){
        console.log('Error while getting data',error);
        res.status(400).send(error);
    }
});

router.post('/poststudent',(req,res)=>{
    try{
     let newUser = new student(req.body);
     console.log(req.body);
     newUser.save().then(data => {
         res.status(200).send({message:'user has been added successfully',data});
     }).catch(error=>{
         res.status(400).send({message:'error while adding user',...error});
     })
    }catch(error){
     res.send(500).send({message:'internal server error'})
    }
 });

 router.put('/updatestudent/:id',(req,res)=>{
    try{
        student.findByIdAndUpdate({_id:req.params.id},{$set:req.body}).then((data)=>{
            res.send({message:'user has been updated successfully',id:data._id});
        }).catch(error => {
            res.send({message:'something error in updating'})
        })
    }catch(error){
        res.send({message:'internal server error'});
    }
})

router.delete('/deletestudent/:id',(req,res)=>{
    try{
        student.deleteOne({_id:req.params.id}).then(data=>{
            res.send({message:'user has been deleted.'})
        }).catch(error=>{
            res.send({message:'error while deleting user'})
        })

    }catch(error){
        res.send({message:'internal server error'});
    }
})

module.exports = router;