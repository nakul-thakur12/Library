const Book = require("../models/book");

// Get all books

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search books by name or terms

exports.searchBooksByName = async (req, res) => {
  const { name } = req.query;
  try {
    const books = await Book.find({ name: { $regex: name, $options: "i" } });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//  Search books by there rental price
exports.searchBooksByRent = async (req, res) => {
  const { min, max } = req.query;
  try {
    const books = await Book.find({ rentperday: { $gte: min, $lte: max } });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search books by category , name and rent or range

exports.filterBooks = async (req, res) => {
  const { category, name, minRent, maxRent } = req.query;
  try {
    const books = await Book.find({
      category,
      name: { $regex: name, $options: "i" },
      rentperday: { $gte: minRent, $lte: maxRent },
    });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
