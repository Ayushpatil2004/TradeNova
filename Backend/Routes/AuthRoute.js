const { Signup, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", userVerification);
router.get("/logout", (req, res) => {
  res.cookie("token", "", {
    httpOnly: false,
    expires: new Date(0),
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  return res.json({ success: true, message: "Logged out successfully" });
});

module.exports = router;
