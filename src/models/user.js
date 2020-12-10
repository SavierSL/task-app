// TO ADD A MODEL

const mongoose = require("mongoose"); // npm i mongoose
const validator = require("validator"); // npm i validator
const bcrypt = require("bcryptjs");

//SCHEMA TO TAKE ADVANTAGE ABOUT THE PRE AND POST FOR ADVANCE FEATURES

const userSchema = new mongoose.Schema({
  //to create a collection
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
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
});

userSchema.statics.findCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Unable to login");
  }
  const isAuth = await bcrypt.compare(password, user.password);
  if (!isAuth) {
    throw new Error("Unable to login");
  }
  return user;
};

// pre before saving and post after save
userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("passowrd")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  user.password = await bcrypt.hash(user.password, 8);
  next(); // make sure to call next() to exit in this function
});

const User = mongoose.model("users", userSchema); // first is the string name for your model and the 2nd is the definition

module.exports = User;
