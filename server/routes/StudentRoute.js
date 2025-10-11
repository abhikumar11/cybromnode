const express=require("express");
const stucontroller = require("../controllers/StudentController");
const router=express.Router();

router.post("/create",stucontroller.createStudent);
router.get("/display",stucontroller.getAllData);
router.post("/search",stucontroller.searchData);
router.get("/delete/:id",stucontroller.deleteData);



module.exports=router;