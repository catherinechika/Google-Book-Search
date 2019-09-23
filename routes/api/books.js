const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .delete(booksController.remove)
  .post(booksController.create);


module.exports = router;
