const express = require("express");
const mongoose = require("mongoose");
const app = express();
// const routes = require("./routes");
var db = require("./models");


const PORT = process.env.PORT || 8080;

// app.use(routes);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("src"));


app.get("/api/books", function (req, res) {
  db.Book
    .find({})
    .then(function (found) {
      res.json(found)
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
})

app.post("/api/books", function (req, res) {
  console.log(req.body);
  db.Book
    .create(req.body)
    .then(function (saved) {
      res.json({ message: "saved" });
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
});



mongoose.connect('mongodb://localhost:27017/bookSearch', { useUnifiedTopology: true, useNewUrlParser: true })


app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

