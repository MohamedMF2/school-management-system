const Admin = require("../model/Staff/Admin");
const verifyToken = require("../utils/verifyToken");

const isLogin = async (req, res, next) => {
  //get token from headers
  const headers = req.headers;
  const token = headers.authorization.split(" ")[1];

  //verify token
  const verifiedToken = verifyToken(token);
  if (verifiedToken) {
    const user = await Admin.findById(verifiedToken.id);
    console.log({ user });
    req.userAuth = user;
    next();
  } else {
    next(new Error("token expired or invalid"));
  }
};
module.exports = isLogin;
