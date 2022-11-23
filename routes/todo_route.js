const todoRoute=require("express").Router();
const todoController=require("../controllers/todoController");
const verifyToken = require('../middleware/verifyToken');

todoRoute.post('/add',verifyToken,todoController.add);

module.exports=todoRoute;