const homePage=(req,res)=>{
    res.render("home")
}
const aboutPage=(req,res)=>{
    res.render("about")
}
const subjectPage=(req,res)=>{
    res.render("subject")
}
const coursePage=(req,res)=>{
    res.render("course")
}
const contactPage=(req,res)=>{
    res.render("contact")
}
const feesPage=(req,res)=>{
    res.render("fees")
}
module.exports={homePage,aboutPage,subjectPage,contactPage,coursePage,feesPage};