const express = require("express");
const router = express.Router();

//import model
const produce = require("../models/produce");


router.get("/addProduce", (req, res) =>{
    res.render("produce", {tittle: "Produce"});
})

router.post("/addProduce", async(req, res) =>{
    try{
        const newProduce = new Produce(req.body);
        await newProduce.save();
        res.redirect("/producelist");
    } catch (error){
        res.status(400).send("Unable to save produce to db");
        console.log("Error saving produce" , error);

    }

})

module.exports = router;