const express = require("express");
const teacherController = require("../controller/teacherController");
const router = express.Router();

router.get("/home", teacherController.homePage);
router.get("/about", teacherController.aboutPage);
router.get("/subject", teacherController.subjectPage);
router.get("/salary", teacherController.salaryPage);

module.exports = router;
