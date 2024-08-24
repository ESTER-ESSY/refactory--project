//dependencies
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const passport = require("passport");
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false
});


require('dotenv').config();

//import models
const signUp = require('../models/signUp')

//importing routes
const authRoutes = require("./routes/authRoutes");
const homeRoute = require("./routes/homeRoute");
const managerRoutes = require("./routes/managerRoutes");
const salesAgentRoutes = require("./routes/salesAgentRoutes");
const userRoutes = require("./routes/userRoutes");
const produceRoute = require("./routes/produceRoute");


//instantiations
const app = express();
const port = 3500;




//configurations
// set db connection to mongoose
mongoose.connect(process.env.DATABASE_LOCAL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", err => {
    console.error(`Connection error: ${err.message}`);
  });





//set view engine to pug

app.set("view engine", "pug");// specify the view engine
app.set("views", path.join(__dirname, "views"));// specify the view directory







//middleware
app.use(express.static(path.join(__dirname, "assets")));//specify a folder for static files
app.use(express.urlencoded({ extended: true }));// helps to parse data from forms
app.use(express.json());// helps to capture data in json

//express session configs
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

//passport configs

//passport.use(signUp.createStrategy()); // use the local strategy
//passport.serializeUser(signUp.serializeUser()); // assign a serial number to a user in the system
//passport.deserializeUser(signUp.deserializeUser()); // the serial number is destroyed on log out






//Routes
//use routes/use imported routes
app.use('/', authRoutes)
app.use('/',homeRoute)
app.use('/',managerRoutes)
app.use('/',salesAgentRoutes)
app.use('/', userRoutes)
app.use('/', produceRoute)

app.get("*", (req, res) => {
  res.send("error! page does not exist");
});


//bootstraping a server
app.listen(port, () => console.log(`listening on port ${port}`));// string interporation
