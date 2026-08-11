const User = require("../Model/UsersModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { fullname, username, email, password, phone, createdAt } = req.body;
    if (!fullname || !username || !email || !password || !phone) {
      return res.json({ message: "All fields are required", success: false });
    }

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      if (existingUser.email === email) {
        return res.json({ message: "User with this email already exists", success: false });
      }
      if (existingUser.username === username) {
        return res.json({ message: "Username is already taken", success: false });
      }
      return res.json({ message: "User already exists", success: false });
    }

    const user = await User.create({
      fullname,
      username,
      email,
      password,
      phone,
      createdAt,
    });
    const token = createSecretToken(user._id, user.tokenVersion || 0);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
    });
    return res.status(201).json({
      message: "User signed in successfully",
      success: true,
      token,
      username: user.username,
      fullname: user.fullname,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message || "Internal server error", success: false });
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.json({ message: "All fields are required", success: false });
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res.json({ message: "Incorrect password or username", success: false });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or username", success: false });
    }
    const token = createSecretToken(user._id, user.tokenVersion || 0);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
    });
    return res.status(201).json({
      message: "User logged in successfully",
      success: true,
      token,
      username: user.username,
      fullname: user.fullname,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message || "Internal server error", success: false });
  }
};

module.exports.Logout = async (req, res) => {
  try {
    let token = req.cookies.token || req.query.token || (req.body && req.body.token);
    if (!token && req.headers.authorization) {
      const authHeader = req.headers.authorization;
      if (authHeader.startsWith("Bearer ")) {
        token = authHeader.substring(7);
      }
    }

    if (token) {
      try {
        const decoded = jwt.decode(token);
        if (decoded && decoded.id) {
          const user = await User.findById(decoded.id);
          if (user) {
            user.tokenVersion = (user.tokenVersion || 0) + 1;
            await user.save();
          }
        }
      } catch (err) {
        console.log("Logout decode error:", err);
      }
    }

    res.cookie("token", "", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      expires: new Date(0),
      path: "/",
    });

    return res.json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Logout error" });
  }
};
