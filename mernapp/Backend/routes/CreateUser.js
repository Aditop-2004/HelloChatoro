const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "hgahgjhgqjghqjjkgiqugjqejgaagregb";
router.post(
  "/createuser",
  [
    body("email").isEmail().withMessage("Invalid email format"),
    body("name")
      .isLength({ min: 5 })
      .withMessage("Name must be at least 5 characters long"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters long"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(req.body.password, salt);
    try{
      await User.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (err){
      console.error(err);
      res.status(500).json({ success: false, error: "Server error" });
    }
  }
);
router.post(
  "/loginuser",
  [
    body("email").isEmail().withMessage("Invalid email format"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters long"),
  ],
  async (req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let userData = await User.findOne({ email });

      if (!userData) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid credentials" }] });
      }
      // Compare plaintext password with hashed password from database
      // Example: Replace with proper hashing mechanism like bcrypt
      const pwdCompare = await bcrypt.compare(password, userData.password);
      if (!pwdCompare) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Incorrect password" }] });
      }
       const data = {
        user:{
          id: userData.id
        }
       }
       const authToken=jwt.sign(data,jwtSecret);
      return res.json({ success: true,authToken:authToken });                                    
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ success: false, error: "Server error" });
    }
  }
);
module.exports = router;
