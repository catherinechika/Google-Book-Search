const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes");

const PORT = process.env.PORT || 8080;

app.use(routes);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("src"));


mongoose.connect('mongodb://localhost:27017/bookSearch', { useUnifiedTopology: true, useNewUrlParser: true })


app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

