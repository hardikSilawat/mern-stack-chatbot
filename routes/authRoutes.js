const express = require("express");
const {
  registerController,
  loginController,
  logOutController,
} = require("../controllers/authController");
const router = express.Router();

// Registers login and logout routes for the application. This is called on the server
router.post("/register", registerController);
router.post("/login", loginController);
router.post("/logout", logOutController);

module.exports = router;
