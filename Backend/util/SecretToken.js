require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  const secret = process.env.JWT_SECRET || "default_secret_key_tradenova";
  return jwt.sign({ id }, secret, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};