const jwt = require("jsonwebtoken");
const User = require("../models/user_model");

exports.isAuth = (req, res, next) => {
  const { cookies } = req;

  if (cookies.accessToken) {
    let user = jwt.verify(cookies.accessToken, process.env.SECRET_KEY);

    if (!req.id) {
      return res.status(401).send({ message: "Not Authorized" });
    }
    return next();
  }
  return res.status(401).send({ message: "Not Authorized" });
};
