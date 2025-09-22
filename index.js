const express=require("express");
const app=express();
const stuRoute=require("./routes/studentRoute");
app.use("/students",stuRoute);
app.listen(3001,()=>{
     console.log("server running on 3001");
})