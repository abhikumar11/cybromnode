const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController");

router.get("/home", studentController.homePage);
router.get("/about", studentController.aboutPage);
router.get("/subject", studentController.subjectPage);
router.get("/course", studentController.coursePage);
router.get("/contact", studentController.contactPage);
router.get("/fees", studentController.feesPage);
router.post("/createstudent", studentController.createStudent);

module.exports = router;
