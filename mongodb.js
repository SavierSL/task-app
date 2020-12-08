// CRUD create read and delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID();
// console.log(id.id); //5fce50d39d68441620219540
// console.log(id.getTimestamp()); //2020-12-07T16:02:36.000Z

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    const db = client.db(databaseName); // to manipulate the database
    console.log("connected");

    // db.collection("users").findOne(                               //findOne
    //   { _id: new ObjectID("5fce41a5d393607c1cf3513c") }, // {name:'Xavier'}
    //   (error, user) => {
    //     if (error) {
    //       return console.log("No user");
    //     }
    //     console.log(user);
    //   }
    // );
    // db.collection("users")
    //   .find({ age: 22 }) // cursor method
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });
    // db.collection("users")
    //   .find({ age: 22 }) // cursor method //count //toArray
    //   .count((error, users) => {
    //     console.log(error);
    //     console.log(users);
    //   });
    // db.collection("tasks").findOne(
    //   { _id: new ObjectID("5fce4d715ffd2086d07eeea3") },
    //   (error, result) => {
    //     console.log(result);
    //   }
    // );

    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((error, result) => {
    //     console.log(result);
    //   });

    // db.collection("users").insertOne(
    //   {
    //     //to insert a collection
    //     _id: id,
    //     name: "Erza",
    //     age: 23,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("error");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Lucy",
    //       age: 21,
    //     },
    //     {
    //       name: "Natsu",
    //       age: 22,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("error");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    //     db.collection("tasks").insertMany( //the val will be added
    //       [
    //         {
    //           description: "Eat",
    //           completed: true,
    //         },
    //         { description: "Study", completed: false },
    //       ],
    //       (error, result) => { // callback
    //         if (error) {
    //           return console.log("error");
    //         }
    //         console.log(result.ops);
    //       }
    //     );
    //   }
    // );

    // UPDATE
    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("5fce41a5d393607c1cf3513c"),
    //     },
    //     {
    //       $set: {
    //         // mongodb update operators
    //         name: "Gajeel",
    //       },
    //       $inc: {
    //         age: 1,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    // db.collection("users")
    //   .updateMany(
    //     {
    //       age: 22,
    //     },
    //     {
    //       $inc: {
    //         age: 1,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    //   db.collection("users") // DELETE
    //     .deleteMany({
    //       age: 21,
    //     })
    //     .then((result) => {
    //       console.log(result);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    db.collection("tasks")
      .deleteOne({
        description: "Study",
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  }
);
