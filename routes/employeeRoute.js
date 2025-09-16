const express =require("express");
const router=express.Router();

router.get("/home",(req,res)=>{
    res.send("<h1>Welcome to employee home page</h1>")
})

router.get("/department",(req,res)=>{
    res.send("<h1>Welcome to department page</h1>")
})
router.get("/salary",(req,res)=>{
    res.send("<h1>Welcome to salary page</h1>")
})
router.get("/work",(req,res)=>{
    res.send("<h1>Welcome to work page</h1>")
})

module.exports=router;