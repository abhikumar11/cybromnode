const express = require("express");
const app = express();
const stuRoute = require("./routes/studentRoute");
const employeeRoute = require("./routes/employeeRoute");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/cybromnode").then(() => console.log("connected to db"));

app.set("view engine", "ejs");

app.use("/students", stuRoute);
app.use("/employees", employeeRoute);
app.listen(3001, () => {
     console.log("server running on 3001");
});
