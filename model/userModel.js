const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");

// Creates a schema for a user that is ready to be added to the database
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be of more than 6 character"],
  },
  customerId: {
    type: String,
    default: "",
  },
});

// hashPassword
userSchema.pre("save", async function (next) {
  // Checks if the user's password has changed and if so proceeds to the next
  // If the password is modified.
  if (!this.isModified("password")) {
    next();
  }
  // Generates a salt and hashes the password using bcrypt. This is the first step in the process
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});



const User = mongoose.model("User", userSchema);

// This is called by CRUD to export the CRUD functions that are available
module.exports = User;
