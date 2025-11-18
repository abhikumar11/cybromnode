const mongoose=require("mongoose");

const userSechema=new mongoose.Schema({
    name:"string",
    email:"string",
    password:"string"
});
module.exports=mongoose.model("user",userSechema);