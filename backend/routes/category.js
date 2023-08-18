const express =require("express");
const categorycontroller =require("../controllers/categorycontroller");
const { model } = require("mongoose");
const router= express.Router();

//get all the categories
router.get("/all",categorycontroller.getAll);

//create new categories

router.post('/create',categorycontroller.create);

//update a category

router.put('/update/:id',categorycontroller.update);

//delete a category
router.delete('/delete/:id',categorycontroller.delete);

 
module.exports=router 