const express = require("express");
const cors = require("cors");
const bodParser = require("body-parser");
const connectDB = require("./db");
const Book = require("./models/book");

const bookRoute = require("./routes/bookRoute");
const userRoute = require("./routes/userRoute");
const transactionRoute = require("./routes/transactionRoute");

const app = express();
app.use(cors());
app.use(bodParser.json());

connectDB();

app.use("/api/books", bookRoute);
app.use("/api/users", userRoute);
app.use("/api/transactions", transactionRoute);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(5000, () => {
  console.log("server is running on port 5000 currectly");
});
