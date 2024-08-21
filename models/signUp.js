const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const signUpSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
    },
    lastname: {
        type: String,
        trim: true,
    },
    phonenumber: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true
        
    },
    password: {
        type: String,
        trim: true,
        unique: true
    },
    role: {
        type: String,
    
    },
    Gender: {
        type: String,
        
    },
    branch: {
        type: String,
        
    },
});

signUpSchema.plugin(passportLocalMongoose, {
    usernameField: "email",
});



module.exports = mongoose.model("Signup", signUpSchema);