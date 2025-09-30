const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController");

router.get("/", studentController.homePage);
router.get("/insert", studentController.insertPage);
router.get("/display", studentController.fetchData);
router.get("/search", studentController.searchPage);
router.get("/update", studentController.updatePage);
router.get("/contact", studentController.contactPage);
router.post("/createstudent", studentController.createStudent);
router.post("/searchdata",studentController.fetchDataByRoll);
router.get("/edit",studentController.editPage);
module.exports = router;
