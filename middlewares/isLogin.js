const Admin = require("../model/Staff/Admin");
const verifyToken = require("../utils/verifyToken");

const isLogin = async (req, res, next) => {
  //get token from headers
  const headers = req.headers;
  const token = headers.authorization.split(" ")[1];

  //verify token
  const verifiedToken = verifyToken(token);
  console.log({verifiedToken});
  if (verifiedToken) {
    const user = await Admin.findById(verifiedToken.id);
    req.userAuth = user;
    next();
  } else {
    const err = new Error("token expired or invalid");
    next(err);
  }
};
module.exports = isLogin;
