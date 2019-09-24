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
  },
  description: {
    type: String,
  },
  infoLink: {
    type: String,
  }
});

var Book = mongoose.model('Book', bookSearch);
module.exports = Book;
