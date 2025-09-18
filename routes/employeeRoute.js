const express=require("express");
const employeeController = require("../controller/employeeController");
const router=express.Router();

router.get("/home",employeeController.homePage);
router.get("/about",employeeController.aboutPage);
router.get("/salary",employeeController.salaryPage);

module.exports=router;