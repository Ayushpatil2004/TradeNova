const User = require("../Model/UsersModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  let token = req.cookies.token;
  if (!token && req.headers.authorization) {
    const authHeader = req.headers.authorization;
    if (authHeader.startsWith("Bearer ")) {
      token = authHeader.substring(7);
    }
  }

  if (!token) {
    return res.json({ status: false });
  }

  const secret = process.env.JWT_SECRET || "default_secret_key_tradenova";
  jwt.verify(token, secret, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      try {
        const user = await User.findById(data.id);
        if (user) {
          return res.json({
            status: true,
            user: user.username,
            fullname: user.fullname,
          });
        } else {
          return res.json({ status: false });
        }
      } catch (e) {
        return res.json({ status: false });
      }
    }
  });
};
