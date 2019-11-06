const express = require("express");
const mongoose = require("mongoose");
const app = express();
// const routes = require("./routes");
var db = require("./models");


const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bookSearch', { useUnifiedTopology: true, useNewUrlParser: true })

// app.use(routes);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("googlebooks/build"));
}

app.delete("/api/books", function (req, res) {
  db.Book
    .remove({})
    .then(function (found) {
      res.json(found)
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
})
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

if (process.env.NODE_ENV === "production") {
  app.get("*", function (req, res) {
    res.sendFile(__dirname + "/googlebooks/build/index.html");
  });
}

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

