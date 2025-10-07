const Student = require("../models/StudentModel");


const createStudent=async(req,res)=>{
    const {rollno,name,city,fees}=req.body;
    const stu=new Student({rollno,name,city,fees});
    await stu.save();
    
}








module.exports={createStudent};