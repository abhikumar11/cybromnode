const homePage=(req,res)=>{
    res.send("<h1>Welcome to home page</h1>")
}
const aboutPage=(req,res)=>{
    res.send("<h1>Welcome to about page</h1>")
}
const subjectPage=(req,res)=>{
    res.send("<h1>Welcome to subject page</h1>")
}
const coursePage=(req,res)=>{
    res.send("<h1>Welcome to course page</h1>")
}
const contactPage=(req,res)=>{
    res.send("<h1>Welcome to contact page</h1>")
}
const feesPage=(req,res)=>{
    res.send("<h1>Welcome to fees page</h1>")
}
module.exports={homePage,aboutPage,subjectPage,contactPage,coursePage,feesPage};