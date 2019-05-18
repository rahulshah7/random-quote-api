const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const quotes = require("./quotes.json");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/random-quote", (req, res, next) => {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  res.send(quotes[quoteIndex]);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
