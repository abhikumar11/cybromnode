const Student = require("../models/StudentModel");


const createStudent=async(req,res)=>{
    const {rollno,name,city,fees}=req.body;
    const stu=await Student.create({rollno,name,city,fees});
    res.send("data saved succesfully");
    
}
const getAllData=async(req,res)=>{
    const stu=await Student.find();
    res.send(stu);
}









module.exports={createStudent,getAllData};