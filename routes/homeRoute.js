const express = require("express");
const router = express.Router();
//const connectEnsureLogin = require("connect-ensure-login");

//const signup = require("./models/Signup");

// home route
router.get("/", (req, res) => {
  // res.send("Welcome to HHG Management System");
  res.render("index");
});



module.exports = router;