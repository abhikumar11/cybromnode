const jwt=require("jsonwebtoken");

const verifyToken=(req,res,next)=>{
    
    const token = req.headers["authorization"];
    if (!token) return res.status(401).json({error:"Access denied"});
    try{
        const decode=jwt.verify(token,"secretkey");
        req.id=decode.id;
        next();
    }catch(err){
        res.status(401).json({error:"Invalid token"});
    }
}
module.exports=verifyToken;