// PLAYING WITH POST AND ROBO

const { response } = require("express");
const express = require("express");
require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
//express. json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app.
app.use(userRouter);
app.use(taskRouter);

//REST API ROUTE

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const bcrypt = require("bcryptjs");

const myFunction = async () => {
  const password = "32512531";
  const hashedPassword = await bcrypt.hash(password, 8);

  console.log(password);
  console.log(hashedPassword);

  const isMatch = await bcrypt.compare("32512531", hashedPassword);
  console.log(isMatch);
};

myFunction();
