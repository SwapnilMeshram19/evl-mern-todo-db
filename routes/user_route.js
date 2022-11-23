const userRoute=require("express").Router();

const userController=require("../controllers/userController");

userRoute.post('/register',userController.register);
userRoute.post('/login',userController.login);

module.exports=userRoute;
