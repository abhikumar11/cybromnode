const http=require("http");
const uc=require("uppercase");
http.createServer((req,res)=>{
    res.write("<h1>welcome to nodejs</h1>");
   res.write(uc("welCome tO tHe citY oF lAkEs"))
    res.end("</br>server response end");
}).listen(3001,()=>{
    console.log("server is running on port 3001")
})