const express = require("express");
const {
  issueBook,
  returnBook,
  getTransactionsByBook,
  getTotalRentByBook,
  getActiveTransactions,
  Record,
} = require("../controllers/transactionController");

const router = express.Router();

router.post("/issue", issueBook);
router.post("/return", returnBook);
router.get("/book", getTransactionsByBook);
router.get("/rent", getTotalRentByBook);
router.get("/record", Record);

router.get("/active", getActiveTransactions);

module.exports = router;
