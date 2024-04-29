const jwt = require("jsonwebtoken");

exports.isAuth = async (req, res, next) => {
  const { cookies } = await req.headers;
  console.log(cookies);
  if (cookies) {
    let user = jwt.verify(cookies, process.env.SECRET_KEY);
    req.id = user._id;
    console.log(req.id);
    if (!req.id) {
      return res.status(401).send({ message: "Not Authorized." });
    }
    return next();
  }
  return res.status(401).send({ message: "Not Authorized." });
};
