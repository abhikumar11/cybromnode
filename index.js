const fs=require("fs");

fs.appendFile("doc2.txt","hello i am abhishek from delhi",(err)=>{
    if(err){
        throw err;
    }
    console.log("new file created!!!");
})