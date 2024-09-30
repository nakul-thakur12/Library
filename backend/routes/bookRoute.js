const express = require("express");

const {
  getAllBooks,
  searchBooksByName,
  searchBooksByRent,
  filterBooks,
} = require("../controllers/bookController");

const router = express.Router();

router.get("/", getAllBooks);
router.get("/search", searchBooksByName);
router.get("/rent", searchBooksByRent);
router.get("/filter", filterBooks);

module.exports = router;
