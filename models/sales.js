const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const connectEnsureLogin = require("connect-ensure-login");


const salesSchema = new mongoose.Schema({
    produceName: {
        type: String,
        trim: true,
    },
    produceType: {
        type: String,
        trim: true,
    },
    date: {
        type: Date,
        trim: true,
    },
    time: {
        type: String,
        trim: true,
    
        
    },
    quantity: {
        type: Number,
        trim: true,
        
    },
    unitCost: {
        type: Number,
    
    },
    totalcost: {
        type: Number,
        
    },
    branch: {
        type: String,
        trim: true
        
    },
    dealerName: {
        type: String,
        trim: true
        
    },
    produceSource: {
        type: String,
        trim: true
        
    },
    supplierName: {
        type: String,
        trim: true
        
    },
    sellingPrice: {
        type: Number,
        
    },
});




module.exports = mongoose.model("Sales", salesSchema);