const UserModel = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken");

const userLogin = async (req, res) => {
     const {email,password}=req.body;
     const user=await UserModel.findOne({email:email});
     if(user){
          const pass=await bcrypt.compare(password,user.password);
          if(pass){
               const token=await jwt.sign({id:user._id,email:user.email},"secretkey",{expiresIn:"1h"});
               res.send(token);
          }
          else{
               res.status(401).json({ message:"Invalid password"});
          }
     }
     else{
           res.status(401).json({ message:"Invalid email"});
     }
     
};

const userReg = async (req, res) => {
     const { name, email, password } = req.body;
     console.log(req.body);
     const hashpassword = await bcrypt.hash(password, 10);
     const user = await UserModel.create({
          name: name,
          email: email,
          password: hashpassword,
     });
     if(user){
        res.status(200).send("user registered");
     }
     else{
         res.status(400).send("something went wrong");   
     }
     
};
const display=(req,res)=>{
     res.status(200).send("Welcome to display page");
}
module.exports = {userLogin,userReg,display};
