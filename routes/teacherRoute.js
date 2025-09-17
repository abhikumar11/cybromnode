const express =require("express");
const router=express.Router();

router.get("/home",(req,res)=>{
    res.send("<h1>Welcome to teacher home page</h1>")
})

router.get("/about",(req,res)=>{
    res.send("<h1>Welcome to teacher about page</h1>")
})
router.get("/subject",(req,res)=>{
    res.send("<h1>Welcome to teacher subject</h1>")
})
router.get("/salary",(req,res)=>{
    res.send("<h1>Welcome to teacher salary page</h1>")
})

module.exports=router;