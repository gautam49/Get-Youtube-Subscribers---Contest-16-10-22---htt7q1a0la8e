const express = require("express");
const app = express();

// Your code goes here

const Subscriber = require("./models/subscribers");

app.get("/subscribers", (req, res) => {
  Subscriber.find().then((subscriber) => res.send(subscriber));
});

app.get("/subscribers/names", (req, res) => {
  Subscriber.find()
    .select({ name: 1, subscribedChannel: 1 })
    .then((subscriber) => res.send(subscriber));
});

app.get("/subscribers/:id", (req, res) => {
  const id = req.params.id;
  Subscriber.find({ _id: id })
    .then((subscribers) =>
      subscribers.map((subscriber) => res.send(subscriber))
    )
    .catch((error) => res.status(400).send({ message: error.message }));
});

module.exports = app;
