const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const path = require("path");

const EventModel = require("./models/EventModel");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://elif:test123@cluster0.ehz8iuk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

  app.get('/events', (req, res) => {
    EventModel.find()
      .then((events) => {
        res.json(events);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.post('/event', async (req, res) => {
    const event = new EventModel({
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      date: req.body.date,
      image: req.body.image,
      isFeatured: req.body.isFeatured,
    });
    try {
      const savedEvent = await event.save();
      res.json(savedEvent);
    } catch (err) {
      res.json({ message: err });
    }
  });


app.listen(5000, () => {
  console.log("Server started on port 5000");
});