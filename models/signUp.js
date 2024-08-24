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
    
    role: {
        type: String,
        trim: true,
    
    },
    Gender: {
        type: String,
        trim: true,
        
    },
    branch: {
        type: String,
        trim: true
        
    },
});

signUpSchema.plugin(passportLocalMongoose, {
    usernameField: "email",
});



module.exports = mongoose.model("Signup", signUpSchema);