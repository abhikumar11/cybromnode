const fs=require("fs");

fs.unlink("doc4.txt",(err)=>{
    if(err)throw err;
    console.log("file deleted");
})