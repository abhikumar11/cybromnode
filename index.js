const fs=require("fs");

fs.rename("doc4.txt","doc3.txt",(err)=>{
    if(err)throw err;
    console.log("file renamed");
})