const express=require("express");
const app=express();
const stuRoute=require("./routes/studentRoute");
const employeeRoute=require("./routes/employeeRoute");

app.use("/students",stuRoute);
app.use("/employee",employeeRoute);
app.listen(3000,()=>{
    console.log("Server running on port 3000");
})