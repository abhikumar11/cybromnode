const fs=require("fs");

fs.open("doc3.txt","w",(err,file)=>{
    if(err)throw err;
    console.log("file created!!!");
})