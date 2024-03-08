const bcrypt = require("bcrypt");
const User = require("../models/usermodel");
const jwt = require("jsonwebtoken");
const Tokens = require("../models/tokenmodel");
const crypto = require("crypto");
const { sendEmail } = require("../utils/sendmail");

exports.register = async (req, res) => {
  try {
    const payload = await req.body;
    if (!payload.password) {
      return res.status(400).send({ message: "Password is Mandatory!" });
    }
    const hashedValue = await bcrypt.hash(payload.password, 12);
    payload.hashedPassword = hashedValue;
    delete payload.password;

    const newUser = new User(payload);
    newUser
      .save()
      .then((data) => {
        res.status(201).send({
          message: "User Registration Successfull!",
          userId: data._id,
        });
      })
      .catch((error) => {
        res.status(400).send({ message: "Error while Registering User!" });
      });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

exports.sigin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      const isValidUser = await bcrypt.compare(
        password,
        existingUser.hashedPassword
      );
      if (isValidUser) {
        const token = await jwt.sign(
          { _id: existingUser._id },
          process.env.SECRET_KEY
        );

        res.cookie("accessToken", token, { expire: new Date() + 86400000 });

        return res.status(200).send({
          message: "User Signed in Successfully!",
          accessToken: token,
        });
      }
      return res.status(400).send({ message: "Invalid Credentials" });
    }
    return res.status(404).send({ message: "User Doesn't exist." });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

exports.signout = async (req, res) => {
  try {
    await res.clearCookie("accessToken");
    res.status(200).send({ message: "User Signed-Out!" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).send({ message: "Please Enter the Email" });
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).send({ message: "User doesn't exist!" });
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

    const link = `http://localhost:8000/forgotPassword?token=${newToken}&id=${user._id}`;

    await sendEmail(user.email, "Forgot-Password Link", {
      name: user.name,
      link: link,
    });
    return res
      .status(200)
      .send({ message: "Email has been sent Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
