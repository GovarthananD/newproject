const User = require("../models/user_model");

exports.isAdmin = (req, res, next) => {
  const { id } = req;

  const user = User.findOne({ _id: id });

  if (user.role !== 1) {
    return res
      .status(401)
      .send({ message: "This is Admin Area Access Denied!" });
  }
  next();
};

exports.isNormalUser = (req, res, next) => {
  const { id } = req;

  const user = User.findOne({ _id: id });

  if (user.role !== 2) {
    return res.status(401).send({ message: "Access Denied!" });
  }
  next();
};
