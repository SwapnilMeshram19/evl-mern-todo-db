const express=require('express');
const connectDb=require('./connect');
const cors=require('cors');
const app=express();

app.use(cors());

const port =8080;
app.use(express.json());

function logger(req,res,next){
    console.log(new Date(), req.method,req.url);
    next();
}

app.use(logger);

app.use('/user',require("./routes/user_route"));


connectDb()
    .then(()=>{
        app.listen(port,()=>{
            console.log("server running on port 8080");
        })
    }).catch((error)=>{
        console.log(error)
    })