const fs=require("fs");

fs.writeFile("doc4.txt","we learn reactjs",(err)=>{
    if(err) throw err;
    console.log("file created!!!");
})