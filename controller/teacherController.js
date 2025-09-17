const homePage = (req, res) => {
    res.render("home")
};
const aboutPage = (req, res) => {
     res.render("about");
};
const subjectPage = (req, res) => {
     res.render("subject");
};
const salaryPage = (req, res) => {
     res.render("salary");
};
module.exports = { homePage, aboutPage, subjectPage, salaryPage };
