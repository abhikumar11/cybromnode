const Student = require("../models/studentModel");

const createStudent = (req, res) => {
     const {rollno,name,city,fees}=req.body;
      Student({
          rollno:rollno,
          name:name,
          city:city,
          fees:fees
     })
     res.render("about");
};
const homePage = (req, res) => {
     res.render("home");
};
const aboutPage = (req, res) => {
     res.render("about");
};
const subjectPage = (req, res) => {
     res.render("subject");
};
const coursePage = (req, res) => {
     res.render("course");
};
const contactPage = (req, res) => {
     res.render("contact");
};
const feesPage = (req, res) => {
     res.render("fees");
};
const fetchData=async(req,res)=>{
     const stu=await Student.find();
  
     res.render("subject",{data:stu});
}
module.exports = {homePage,aboutPage,fetchData,contactPage,coursePage,feesPage,createStudent};
