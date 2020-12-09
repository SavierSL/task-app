const mongoose = require("mongoose"); // npm i mongoose
const validator = require("validator"); // npm i validator
const Task = mongoose.model("tasks", {
  description: {
    type: String,
    trim: true,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = Task;
