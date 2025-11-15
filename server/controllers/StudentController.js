const AuthorModel = require("../models/AuthorModel");
const BookModel = require("../models/BookModel");
const Student = require("../models/StudentModel");



const createStudent=async(req,res)=>{
    // const {name,email,fname,lname}=req.body;
    // const temp2=await UserDetail.create({fname,lname});
    // const temp=await User.create({name,email});
    res.send("data saved succesfully");
    
}
const getAllData=async(req,res)=>{
    const author=await AuthorModel.find().populate("booksid"); 
    res.send(author);
}
const searchData=async(req,res)=>{
    // const {rollno}=req.body;
    // const stu=await Student.find({rollno:rollno}); 
    // res.send(stu);
}
const deleteData=async(req,res)=>{
    // const {id}=req.params;
    // const stu=await Student.findByIdAndDelete(id);
    res.send({msg:"Data deleted successfully"});
}
const getStudent=async(req,res)=>{
    // const {id}=req.params;
    // const stu=await Student.findById(id);
    // res.send(stu);
    
}
const updateStudent=async(req,res)=>{
    // const {_id,rollno,name,city,fees}=req.body;
    // const stu=await Student.findByIdAndUpdate(_id,{rollno,name,city,fees});
    res.send({msg:"Data updated successfully"});
}
const createAuthor=async(req,res)=>{
    const {name,email,bookname,bookprice}=req.body;
    try {
        const author=await AuthorModel.create({
            authorname:name,
            email:email
        });
        const book=await BookModel.create({
            bookname:bookname,
            price:bookprice,
            authorid:author._id
        });
        await AuthorModel.findByIdAndUpdate(author._id,{$push:{booksid:book._id}});
        res.send("author created");
    } catch (error) {
        res.send("error");
    }
}
const createBook=async(req,res)=>{

       const {authorId,bookname,price}=req.body;

    const book = await BookModel.create({
          bookname:bookname,
          price:price
    })
    await AuthorModel.findByIdAndUpdate(authorId,{$push:{booksid:book._id}})
     res.send("Book saved");
}
const showBook=async(req,res)=>{
        try{
                const book=await BookModel.find().populate("authorid");
                res.send(book);
        }catch(err){
                res.status(500).send("something went wrong");
        }
}
module.exports={createStudent,getAllData,searchData,deleteData,getStudent,updateStudent,createAuthor,createBook,showBook};