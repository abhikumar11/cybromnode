const http=require("http");
const uc=require("uppercase");
const fs=require("fs");
http.createServer((req,res)=>{
    res.write("<h1>welcome to nodejs</h1>");   
       res.write("welCome tO tHe citY oF lAkEs</br>")     
   res.write(uc("welCome tO tHe citY oF lAkEs"))      
  fs.readFile("doc.txt",(err,data)=>{
        if(err){
            throw err;    
        }
        res.write(`<p>${data}</p>`)
        res.end("</br>server response end");
   });
    
}).listen(3001,()=>{
    console.log("server is running on port 3001")
})