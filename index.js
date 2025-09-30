const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const stuRoute = require("./routes/studentRoute");

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/cybromnode").then(() => console.log("connected to db"));

app.set("view engine", "ejs");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/", stuRoute);

app.listen(3001, () => {
     console.log("server running on 3001");
});
