const express = require("express");
const app = express();
const cors=require("cors");
require("dotenv").config();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const stuRoute=require("./routes/StudentRoute");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
//app.use("/student",stuRoute);

app.get("/home",(req,res)=>{
   try {
    throw new Error("Synchronous Error")
   } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
   }
})
app.get("/about",(req,res)=>{
    console.log("Route level middleware");
    res.send("Welcome to about page")
})
app.get("/service",(req,res,next)=>{
    console.log("Service page middleware");
    next();
},(req,res,next)=>{
res.send("Welcome to service page")
next();
})

mongoose.connect(process.env.DBCONN).then(() => console.log("connected to db"));



app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})