const mongoose = require('mongoose')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});

var bookSearch = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  infoLink: {
    type: String,
    required: true
  }
});

var Book = mongoose.model('Book', bookSearch);
module.exports = Book;
