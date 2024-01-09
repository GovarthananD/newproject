const express = require("express");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const User = require("../models/user_model");
const Tokens = require("../models/token_model");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { sendEmail } = require("../utils/sendEmail");
dotenv.config();

const router = express.Router();

// router.post("/register", async (req, res) => {
//   try {
//     const { name, password, email, mobileNumber } = req.body;
//     if (!password || password.trim() === "") {
//       return res.status(400).send({ message: "Password is Mandatory" });
//     }
//     // if(!password){
//     //     return res.status(400).send({message:'Password is Mandatory'})
//     // };
//     // const hashedValue = await bcrypt.hashSync(payload.password, 13);
//     // payload.hashedPassword = hashedValue;
//     // delete payload.password;

//     // const newUser = new User(payload);

//     // newUser
//     //   .save()
//     //   .then((data) => {
//     //     res.status(201).send({
//     //       message: "User Registration Successully.",
//     //       userId: data._id,
//     //     });
//     //   })
//     //   .catch((error) => {
//     //     res.status(400).send({ message: "error while registering user" });
//     //   });
//   } catch (error) {
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// });

router.post("/register", async (req, res) => {
  try {
    const { name, password, email, mobile } = req.body;
    // if (!name || !password || !email || !mobileNumber) {
    //   return res.status(400).send({ message: "All fields are mandatory" });
    // }
    if (!password) {
      return res.status(400).send({ message: "Password is Mandatory" });
    }
    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 13);
    const newUser = new User({
      name,
      hashedPassword,
      email,
      mobile,
    });

    // Save the user document to the database
    const savedUser = await newUser.save();

    res.status(201).send({
      message: "User Registration Successfully.",
      userId: savedUser._id,
    });
  } catch (error) {
    console.error("Problem "+error.message);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      const isValidUser = await bcrypt.compare(
        password,
        existingUser.hashedPassword
      );
      if (isValidUser) {
        const id = existingUser._id;
        // console.log(process.env.SECRET_KEY);
        const token = await jwt.sign({ id }, process.env.SECRET_KEY);
        // console.log(token);
        res.cookie("accessToken", token, { expire: new Date() + 86400000 });
        return res
          .status(201)
          .send({ message: "User Signed in Successfully." });
      }
      return res.status(400).send({ message: "Email or Password Incorrect" });
    }
    return res.status(404).send({ message: "User doesn't exist." });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/signout", (req, res) => {
  try {
    res.clearCookie("accessToken");
    res.status(200).send({ message: "User Signed-Out!" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});
router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).send({ message: "Email is Mandatory" });
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).send({ message: "User doesn't exist" });
    }
    let token = await Tokens.findOne({ userId: user._id });
    if (token) {
      await token.deleteOne();
    }
    let newToken = crypto.randomBytes(32).toString("hex");
    const hashedToken = await bcrypt.hash(newToken, 10);
    const tokenPayload = new Tokens({
      userId: user._id,
      token: hashedToken,
      createdAt: Date.now(),
    });
    await tokenPayload.save();
    const link = `http://localhost:3000/reset-password?token=${newToken}&id=${user._id}`;

    await sendEmail(user.email, "Forgot Passowrd Link", {
      name: user.name,
      link: link,
    });
    return res
      .status(200)
      .send({ message: "Email has been send Successfully!" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.post("/reset-password", async (req, res) => {
  try {
    const { userId, token, newPassword } = await req.body;
    const resetToken = await Tokens.findOne({ userId: userId });
    console.log(resetToken);
    if (!resetToken) {
      return res.status(400).send({ message: "Invalid or Expired Token" });
    }
    const isValid = await bcrypt.compare(token, resetToken.token);
    console.log(isValid);
    if (!isValid) {
      return res.status(400).send({ message: "Invalid Token" });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    console.log(hashedPassword);
    const check = await User.findByIdAndUpdate(
      { _id: userId },
      { $set: { hashedPassword: hashedPassword } }
    ).catch((error) => {
      res.status(400).send({ message: "Error while updating user password." });
    });
    console.log(check);

    return res.status(500).send({ message: "Password Reset is Successfull" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});
module.exports = router;
