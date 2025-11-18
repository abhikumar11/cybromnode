const express=require("express");
const stucontroller = require("../controllers/StudentController");
const verifyToken = require("../middlewares/authMiddle");
const router=express.Router();

router.post("/login",stucontroller.userLogin);
router.post("/registration",stucontroller.userReg);
router.get("/display",verifyToken,stucontroller.display)

module.exports=router;