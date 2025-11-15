const express=require("express");
const stucontroller = require("../controllers/StudentController");
const router=express.Router();

router.post("/create",stucontroller.createStudent);
router.get("/display",stucontroller.getAllData);
router.get("/delete/:id",stucontroller.deleteData);
router.get("/show/:id",stucontroller.getStudent);
router.post("/updatestu",stucontroller.updateStudent);
router.post("/createauthor",stucontroller.createAuthor);
router.post("/createbook",stucontroller.createBook);
router.get("/showbook",stucontroller.showBook);
module.exports=router;