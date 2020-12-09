//TO CONNECT IN ROBO

const mongoose = require("mongoose"); // npm i mongoose
const validator = require("validator"); // npm i validator

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

mongoose.connect(`${connectionURL}/task-manager-api`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// const User = mongoose.model("users", {
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true, // trim spaces
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Email is invalid");
//       }
//     },
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error("Age must be a positive number");
//       }
//     },
//   },
// }); // first is the string name for your model and the 2nd is the definition

// const Task = mongoose.model("tasks", {
//   description: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   completed: {
//     default: false,
//     type: Boolean,
//   },
//   password: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 7,
//     validate(value) {
//       if (value === "password") {
//         // or value.toLowerCase().includes('password')
//         throw new Error(
//           "Password must not be a password and not below 6 chars"
//         );
//       }
//     },
//   },
// });

// const me = new User({
//   name: "Xavier",
//   email: "XaveSL@gmail.com    ",
// });

// const newTask = new Task({
//   description: "Eat",
//   password: "123456789",
// });

// me.save()
//   .then((r) => console.log(r))
//   .catch((e) => console.log(e)); // to save the data only

// newTask
//   .save()
//   .then((r) => console.log(r))
//   .catch((e) => console.log(e));

//DATA VALIDATION AND SANITIZATION

//STRUCTURING A REST API

// CRUD
// C = POST
// R = GET
// U = PATCH
// D = DELETE
