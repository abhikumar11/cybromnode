const express = require("express");
const app = express();
const cors=require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const stuRoute=require("./routes/StudentRoute");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
app.use("/student",stuRoute);
mongoose.connect("mongodb+srv://abhi:abhi@cluster1.p6lnqsp.mongodb.net/?retryWrites=true&w=majority&appName=cluster1").then(() => console.log("connected to db"));



app.listen(3001, () => {
    console.log("Server running on port 3001")
})