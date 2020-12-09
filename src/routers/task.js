const express = require("express");
const router = new express.Router();
const Task = require("../models/task");

router.get("/tasks", async (req, res) => {
  try {
    const findTasks = await Task.find({});
    res.status(201).send(findTasks);
  } catch (e) {
    res.status(500).send(e);
  }

  // Task.find({})
  //   .then((users) => res.status(201).send(users))
  //   .catch((e) => res.status(500).send(e));
});

router.get("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const taskById = await Task.findById(_id);
    res.send(taskById);
  } catch (e) {
    res.status(404).send(e);
  }

  // Task.findById(_id)
  //   .then((user) => res.send(user))
  //   .catch((e) => res.status(404).send(e));
});

router.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  try {
    const saveTask = await task.save();
    res.status(201).send(saveTask);
  } catch (e) {
    res.status(400).send(e);
  }
  // task
  //   .save()
  //   .then(() => res.status(201).send(task))
  //   .catch((e) => res.status(400).send(e));
});

// UPDATING

router.patch("/tasks/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["completed", "description"];
  const isValid = updates.every((update) => {
    return allowedUpdates.includes(update);
  });
  if (!isValid) {
    return res.status(400).send({ error: "Invalid Updates" });
  }
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      res.send(404).send();
    }
    res.status(201).send(task);
  } catch (e) {
    res.status(404).send(e);
  }
});

router.delete("/tasks/:id", async (req, res) => {
  const deleteId = req.params.id;
  try {
    const id = await Task.findByIdAndDelete(deleteId);
    if (!id) {
      return res.send(404).send();
    }
    res.status(201).send(id);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
