const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const quotes = require("./quotes.json");

app.get("/api/random-quote", (req, res) => {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  res.send(quotes[quoteIndex]);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
