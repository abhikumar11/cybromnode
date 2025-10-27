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

app.use((req,res,next)=>{
    console.log("First app level middleware");

    next();
})
app.get("/home",(req,res)=>{
    console.log("Home page");
    res.send("Welcome to home page")
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
app.use((req,res,next)=>{
    console.log("last level middleware")
})
mongoose.connect(process.env.DBCONN).then(() => console.log("connected to db"));



app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})