const express = require("express");
const app = express();
const cors=require("cors");
require("dotenv").config();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const stuRoute=require("./routes/StudentRoute");
const errorHandler = require("./middlewares/erroHandler");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
app.use("/student",stuRoute);


mongoose.connect(process.env.DBCONN).then(() => console.log("connected to db"));



app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})