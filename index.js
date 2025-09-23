const express=require("express");
const app=express();
const stuRoute=require("./routes/studentRoute");
const employeeRoute=require("./routes/employeeRoute");

app.use("/students",stuRoute);
app.use("/employees",employeeRoute);
app.listen(3001,()=>{
     console.log("server running on 3001");
})