const todoRoute=require('express').Router();
const {add}=require("../controllers/todoController");
const verifyToken = require('../middleware/verifyToken');

todoRoute.post('/add',verifyToken,add);