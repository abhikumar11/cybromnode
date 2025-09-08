const http=require("http");
const user=require("./user");
http.createServer((req,res)=>{
    res.write("<h1>welcome to nodejs</h1>");
    res.write(user.UserName());
    res.write("</br>");
    res.write(user.UserAge());
    res.end();
}).listen(3001,()=>{
    console.log("server is running on port 3001")
})