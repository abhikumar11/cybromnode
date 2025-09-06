const http=require("http");

http.createServer((req,res)=>{
    res.write("<h1>welcome to nodejs</h1>");
    res.end();
}).listen(3001,()=>{
    console.log("Server is runing on port 3001");
});