require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndUpdate("5fd0583540f96448a0113cd0", { completed: true })
//   .then((user) => {
//     console.log(user);
//     return Task.countDocuments({ completed: true });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => console.log(e));

// also findByIdAndDelete
const findAndUpdate = async (id, bool) => {
  const updateId = await Task.findByIdAndUpdate(id, { completed: false });
  const count = await Task.countDocuments(bool);
  return count;
};

findAndUpdate("5fd0583540f96448a0113cd0", { completed: false })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
