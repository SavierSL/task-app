// PLAYING WITH POST AND ROBO

const { response } = require("express");
const express = require("express");
require("./db/mongoose");

const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
//REST API ROUTE
app.post("/users", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => res.status(201).send(user))
    .catch((e) => res.status(400).send(e)); //HTTP STATUSES like 200 or 201 or 400
});

app.get("/users", (req, res) => {
  User.find({})
    .then((users) => res.status(201).send(users))
    .catch((e) => res.status(500).send(e));
}); //QUERIES GUIDE

app.get("/users/:id", (req, res) => {
  const _id = req.params.id; //findOne() if email or soemthing or findById()
  User.findById(_id)
    .then((user) => {
      res.send(user);
    })
    .catch((e) => res.status(404).send(e));
  console.log(req.params.id);
});

app.get("/tasks", (req, res) => {
  Task.find({})
    .then((users) => res.status(201).send(users))
    .catch((e) => res.status(500).send(e));
});

app.get("/tasks/:id", (req, res) => {
  const _id = req.params.id;
  Task.findById(_id)
    .then((user) => res.send(user))
    .catch((e) => res.status(404).send(e));
});

app.post("/tasks", (req, res) => {
  const task = new Task(req.body);

  task
    .save()
    .then(() => res.status(201).send(task))
    .catch((e) => res.status(400).send(e));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
