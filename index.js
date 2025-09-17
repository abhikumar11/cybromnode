const express=require("express");
const app=express();
const stuRoute=require("./routes/studentRoute");
const employeeRoute=require("./routes/employeeRoute");
const teacherRoute=require("./routes/teacherRoute");

app.use("/students",stuRoute);
app.use("/employee",employeeRoute);
app.use("/teacher",teacherRoute);
app.listen(3000,()=>{
    console.log("Server running on port 3000");
})