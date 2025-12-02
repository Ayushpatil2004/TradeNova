const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UsersSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Your fullname is required"],
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  phone: {
    type: Number,
    required: [true, "Your phone number is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

UsersSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", UsersSchema);