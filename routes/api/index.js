const router = require("express").Router();
const bookRoutes = require("./books");
const path = require("path");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
