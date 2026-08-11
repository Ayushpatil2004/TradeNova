require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id, tokenVersion = 0) => {
  const secret = process.env.JWT_SECRET || "default_secret_key_tradenova";
  return jwt.sign({ id, tokenVersion }, secret, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};