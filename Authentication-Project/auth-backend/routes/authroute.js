const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/usermodel");
const jwt = require('jsonwebtoken');
const {register, sigin, signout, forgotPassword} = require("../controllers/auth.controllers");

const router = express.Router();

router.post("/register", register);

router.post('/signin', sigin);

router.get('/signout', signout);

router.post('/forgotPassword', forgotPassword);

module.exports = router;
