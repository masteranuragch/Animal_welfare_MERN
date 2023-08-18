const express =require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app= express();
const cors=require("cors");
// const mongoUrl ='mongodb+srv://masteranuragch:masteranuragch@cluster0.yja1psc.mongodb.net/animal-welfare?retryWrites=true&w=majority';
const categoryRoutes= require('./routes/category');
const petRoutes=require('./routes/pet');
const adoptionRoutes=require('./routes/adoption');

const path=require('path');

const morgan=require('morgan');

app.use(cors());
app.use(express.json());

app.use(morgan('tiny'));

app.use('/public',express.static(path.join(__dirname,'public')));

// routes

app.use('/api/category',categoryRoutes); 
app.use('/api/pets',petRoutes); 
app.use('/api/adoption',adoptionRoutes);


const connection=mongoose.connect(process.env.mongoUrl);
const port =process.env.PORT

app.listen(port,async()=>{
    try{
        await connection 
        console.log("database is connected") 
    }
    catch(error){ 
        console.log(error)
    }


    console.log("server is running on port number",port)
}) 