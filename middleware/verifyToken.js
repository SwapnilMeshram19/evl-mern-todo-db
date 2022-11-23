const jwt=require("jsonwebtoken");
const SECRET_KEY = "IJFLSKDFJSLFJSLFJ123JL34";
function verifyToken(req,res,next){
    const token=req.header['authorization'];
    if(!token){

        res.sendStatus(403).send('A token is not valid')
    }
    try{
        const decoded=jwt.verify(token,SECRET_KEY);
        req.user=decoded;
        return next();
    } catch(error){
        return res.status(401).send('Invalid Token')
    }

    
}

module.exports=verifyToken;