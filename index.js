const express=require("express");
const app=express();
const stuRoute=require("./routes/studentRoute");
app.use("/students",stuRoute);
app.listen(3000,()=>{
    console.log("Server running on port 3000");
})