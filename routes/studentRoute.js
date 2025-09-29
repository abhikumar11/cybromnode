const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController");

router.get("/home", studentController.homePage);
router.get("/insert", studentController.aboutPage);
router.get("/display", studentController.fetchData);
router.get("/search", studentController.coursePage);
router.get("/update", studentController.contactPage);
router.get("/contact", studentController.feesPage);
router.post("/createstudent", studentController.createStudent);
router.post("/searchdata",studentController.fetchDataByRoll);
module.exports = router;
