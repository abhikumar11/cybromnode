const http=require("http");
const user=require("./user");
http.createServer((req,res)=>{
    res.write("<h1>welcome to nodejs</h1>");
    res.write(`<h2>${user.myDate()}</h2>`);
    res.write(`<h2>${user.myCity()}</h2>`);
    res.end("server response end");
}).listen(3001,()=>{
    console.log("server is running on port 3001")
})