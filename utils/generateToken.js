const jwt = require("jsonwebtoken");

const generateToken = (id, durationInMinutes) => {
  const expiresIn = durationInMinutes * 60; // Convert minutes to seconds
  return jwt.sign({ id }, "anykey", { expiresIn }); // Use expiresIn in seconds
};

module.exports = generateToken;
