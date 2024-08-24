const express = require("express");
const router = express.Router();

//import model
const produce = require("../models/produce");


router.get("/addProduce", (req, res) =>{
    res.render("produceProcured", {tittle: "Produce"});
})

router.post("/addProduce", async(req, res) =>{
    try{
        const newProduce = new produce(req.body);
        await newProduce.save();
        res.redirect("/producelist");
    } catch (error){
        res.status(400).send("Unable to save produce to db");
        console.log("Error saving produce" , error);

    }

})

router.get("/producelist", async(req, res) =>{
    try{
        const produceList = await Produce.find();
        res.render("producelist", {produceList, tittle: "Produce List"});
    } catch (error){
        res.status(400).send("Unable to fetch produce from db");
        console.log("Error fetching produce" , error);
    }
})

module.exports = router;