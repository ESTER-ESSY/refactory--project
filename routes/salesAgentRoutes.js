const express = require("express");
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login");

//const signup = require("./models/Signup");


router.get("/salesagentpage", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
     res.send("Welcome to Happy Hoe Grocery Management System");
    res.render("salesagent");
  });

  module.exports = router;