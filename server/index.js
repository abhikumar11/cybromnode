const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/cybromnode").then(() => console.log("connected to db"));



app.listen(3001, () => {
    console.log("Server running on port 3001")
})