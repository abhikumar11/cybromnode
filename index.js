const express = require("express");
const app = express();
const teacherRoute = require("./routes/teacherRoute");

app.set("view engine","ejs");
app.use("/teacher", teacherRoute);
app.listen(3000, () => {
     console.log("Server running on port 3000");
});
