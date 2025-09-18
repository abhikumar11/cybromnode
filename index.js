const express = require("express");
const app = express();
const teacherRoute = require("./routes/teacherRoute");
const employeeRoute=require("./routes/employeeRoute");

app.set("view engine","ejs");
app.use("/teacher", teacherRoute);
app.use("/employee", employeeRoute);
app.listen(3000, () => {
     console.log("Server running on port 3000");
});
