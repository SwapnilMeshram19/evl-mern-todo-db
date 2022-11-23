const mongoose=require('mongoose');

async function connectDb(){
    return new Promise((resolve,reject)=>{
        mongoose.connect("mongodb+srv://sam:Sam@cluster0.b37euu9.mongodb.net/?retryWrites=true&w=majority",(error)=>{
            if(error){
                return reject(err);
            }

            console.log("Database connected");
            return resolve();
        })
    })
}

module.exports=connectDb