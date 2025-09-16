const express =require("express");
const router=express.Router();

router.get("/home",(req,res)=>{
    res.send("<h1>Welcome to home page</h1>")
})

router.get("/about",(req,res)=>{
    res.send("<h1>Welcome to about page</h1>")
})
router.get("/courses",(req,res)=>{
    res.send("<h1>Welcome to our courses</h1>")
})
router.get("/fees",(req,res)=>{
    res.send("<h1>Welcome to fees page</h1>")
})

module.exports=router;