const UserModel = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken");
const multer = require('multer');
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../cloudinary");
const StudentModel=require("../models/StudentModel");

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "student_images",
        format: async (req, file) => 'jpg',
        public_id: (req, file) => Date.now() + '-' + file.originalname,
    },
});

const upload = multer({ storage: storage }).array('images', 10);

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
 const createStudent=(req,res)=>{
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).send("Error uploading files: " + err.message);
        }

        const { name, email, subject } = req.body;
        const imageUrls = req.files.map(file => file.path);


        const student = await StudentModel.create({
            name: name,
            email: email,
            subject: subject,
            images: imageUrls,
            defaultImage: imageUrls[0]
        })
    });

    res.send("Data save!");
    
 }
module.exports = {userLogin,userReg,display,createStudent};
