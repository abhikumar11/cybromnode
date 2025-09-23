const homePage = (req, res) => {
    res.send("<h1>Welcome to employee home page</h1>")
};
const aboutPage = (req, res) => {
     res.send("<h1>Welcome to employee about page</h1>");
};
const designationPage = (req, res) => {
     res.send("<h1>Welcome to employee designation page</h1>");
};
const departmentPage = (req, res) => {
     res.send("<h1>Welcome to employee department page</h1>");
};
const salaryPage = (req, res) => {
     res.send("<h1>Welcome to employee salary page</h1>");
};
module.exports = { homePage, aboutPage,departmentPage,designationPage,salaryPage };