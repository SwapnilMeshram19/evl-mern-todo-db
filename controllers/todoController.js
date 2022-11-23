const jwt =require('jsonwebtoken');
const SECRET_KEY = "IJFLSKDFJSLFJSLFJ123JL34";

exports.add=async(req,res)=>{
    res.status(200).send("Welcome 🙌 ");
}