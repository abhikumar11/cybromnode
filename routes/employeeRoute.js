const express=require("express");
const employeeController = require("../controller/employeeController");
const router=express.Router();

router.get("/home",employeeController.homePage);
router.get("/about",employeeController.aboutPage);
router.get("/designation",employeeController.designationPage);
router.get("/department",employeeController.departmentPage);
router.get("/salary",employeeController.salaryPage);

module.exports=router;