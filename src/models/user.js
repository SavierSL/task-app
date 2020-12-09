// TO ADD A MODEL

const mongoose = require("mongoose"); // npm i mongoose
const validator = require("validator"); // npm i validator
const User = mongoose.model("users", {
  //to create a collection
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true, // trim spaces
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 6,
    validate(value) {
      if (value === "password") {
        // or value.toLowerCase().includes('password')
        throw new Error(
          "Password must not be a password and not below 6 chars"
        );
      }
    },
  },
}); // first is the string name for your model and the 2nd is the definition

module.exports = User;
