const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "VIDHISH");
};

module.exports = generateToken;
