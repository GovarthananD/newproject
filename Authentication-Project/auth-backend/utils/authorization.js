const User = require("../models/usermodel");

exports.isAdmin = async (req, res, next) => {
    const {id} = req;

    const users = await User.findOne({_id: id});
    if(users.role !==1){
        return res.status(401).send({message:'Admin Resource. Access Denied!.'})
    }
    next();
}

exports.isNormalUser = async (req, res, next) => {
    const {id} = req;

    const users = await User.findOne({_id: id});
    if(users.role !==1){
        return res.status(401).send({message:'Access Denied!.'})
    }
    next();
}