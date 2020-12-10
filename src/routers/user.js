const express = require("express");
const router = new express.Router();
const User = require("../models/user");

router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e.message);
  }
  // user
  //   .save()
  //   .then(() => res.status(201).send(user))
  //   .catch((e) => res.status(400).send(e)); //HTTP STATUSES like 200 or 201 or 400
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(201).send(users);
  } catch (e) {
    res.stats(500).send(e);
  }

  // User.find({})
  //   .then((users) => res.status(201).send(users))
  //   .catch((e) => res.status(500).send(e));
}); //QUERIES GUIDE

router.delete("/users/:id", async (req, res) => {
  const deleteId = req.params.id;
  try {
    const id = await User.findByIdAndDelete(deleteId);
    if (!id) {
      return res.status(404).send();
    }
    res.send(id);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/users/:id", async (req, res) => {
  const _id = req.params.id; //findOne() if email or soemthing or findById()
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.status(201).send(user);
  } catch (e) {
    res.status(404).send(e);
  }

  // User.findById(_id)
  //   .then((user) => {
  //     res.send(user);
  //   })
  //   .catch((e) => res.status(404).send(e));
  // console.log(req.params.id);
});

router.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "age"];
  const isValidOpertion = updates.every((update) => {
    return allowedUpdates.includes(update);
  });
  if (!isValidOpertion) {
    return res.status(400).send({ error: "Invalid Updates" });
  }
  try {
    const user = await User.findById(req.params.id);
    updates.forEach((update) => {
      return (user[update] = req.body[update]);
    });
    await user.save();
    // const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

//LOGGIN IN
router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findCredentials(req.body.email, req.body.password);
    res.send(user);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = router;
