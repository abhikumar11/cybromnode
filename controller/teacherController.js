const homePage=(req,res)=>{
    res.send("<h1>Welcome to home page</h1>")
}
const aboutPage=(req,res)=>{
    res.send("<h1>Welcome to about page</h1>")
}
const subjectPage=(req,res)=>{
    res.send("<h1>Welcome to subject page</h1>")
}
const salaryPage=(req,res)=>{
    res.send("<h1>Welcome to salary page</h1>")
}
module.exports={homePage,aboutPage,subjectPage,salaryPage};