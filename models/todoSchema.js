const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  todo_list: [
    {
      taskname: String,
      status: String,
      tag: String,
    },
  ],
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
