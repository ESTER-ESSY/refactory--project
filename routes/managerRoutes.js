const express = require("express");
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login");

//const signup = require("./models/Signup");

// home route
//router.get("/", (req, res) => {
 //res.send("Welcome to HHG Management System");
  //res.render("index");
//});


// manager route
// connectEnsureLogin.ensureLoggedIn(),
router.get("/managerpage", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
 res.send("Welcome to Happy Hoe Grocery Management System");
  res.render("manager");
});



module.exports = router;