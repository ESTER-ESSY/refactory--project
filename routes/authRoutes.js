const express = require("express");
const router = express.Router();

const passport = require("passport");


//import model
const Signup = require("../models/signUp");

//get Signup page
router.get("/addUser", (req, res)=>{
    res.render("signup");
});

//add user
router.post("/addUser", async (req, res ) =>{
    try{
        const existingUser = await Signup.findOne({email:req.body.email});
        if (existingUser) {
            return res
            .status(400)
            .send("Not registered, a user with a similar email already exists!");
        }
        const user = new Signup(req.body);
        await user.Save()
        await Signup.register(user, req.body.password, (err) =>{
            if (err) {
                throw err;
            }
            res.redirect("/login");
        });
    } catch (err){
        res.status(400).render("Signup",{tittle: "Sign Up"});
        console.log("register user error" , err);
    }
});

//get login form
// Login admin
router.get ("/login",(req,res)=>{
    res.render("login");
})
router.post("/login", passport.authenticate("local", { failureRedirect: "/login" }),
(req, res) => {
req.session.user = req.user; //assigning a session to a user who has logged in
if(req.user.role === "manager"){
 res.redirect("/managerdashboard");
res.send("Manager");
} else if(req.user.role === "salesagent"){
 res.redirect("/salesdashboard");
res.send("Saleagent dashboard");
} else {
res.send("user with that role does not exist in the system")
}

}
);

//logout route
router.get("/logout", (req, res)=>{
    if (req.session){
        req.session.destroy((err)=>{
            if(err){
                return res.status(500).send("Error logging out");
            }
            res.redirect("/");
        });
    }
});




module.exports = router;
