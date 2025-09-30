const Student = require("../models/studentModel");

const createStudent = async(req, res) => {
     const { rollno, name, city, fees } = req.body;
     console.log(req.body);
     const stu=new Student({
          rollno: rollno,
          name: name,
          city: city,
          fees: fees,
     });
     await stu.save();
     res.render("insert");
};
const homePage = (req, res) => {
     res.render("home");
};
const insertPage = (req, res) => {
     res.render("insert");
};
const searchPage = (req, res) => {
     res.render("search", { data: [] });
};
const updatePage = (req, res) => {
     res.render("update");
};
const contactPage = (req, res) => {
     res.render("contact");
};
const fetchData = async (req, res) => {
     const stu = await Student.find();

     res.render("display", { data: stu });
};
const fetchDataByRoll = async (req, res) => {
     const { rollno } = req.body;
     const stu = await Student.find({ rollno: rollno });
     res.render("search", { data: stu });
};
module.exports = {
     homePage,
     insertPage,
     fetchData,
     contactPage,
     searchPage,
     updatePage,
     createStudent,
     fetchDataByRoll,
};
