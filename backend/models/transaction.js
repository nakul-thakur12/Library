const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  issueDate: { type: Date, required: true },
  returnDate: { type: Date },
  status: { type: String, enum: ["issued", "returned"], default: "issued" },
  totalRent: { type: Number }, // Updated to totalRent
});

const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;
