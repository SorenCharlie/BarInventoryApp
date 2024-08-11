const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");

// Route for displaying the registration form
router.get("/register", (req, res) => {
  res.render("register"); // Ensure you have a `register.handlebars` template
});

// Route for handling user registration
router.post("/register", registerUser);

// Route for displaying the login form
router.get("/login", (req, res) => {
  res.render("login"); // Ensure you have a `login.handlebars` template
});

// Route for handling user login
router.post("/login", loginUser);

module.exports = router;
