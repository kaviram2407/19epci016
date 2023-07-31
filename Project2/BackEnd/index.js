const express = require("express");

const app = express();

app.get("/numbers/prime", (req, res) => {
  res.json({
    numbers: [2, 3, 5, 7, 11, 13],
  });
});

app.get("/numbers/fibo", (req, res) => {
  res.json({
    numbers: [1, 1, 2, 3, 5, 8, 13, 21],
  });
});

app.get("/numbers/odd", (req, res) => {
  res.json({
    numbers: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23],
  });
});

app.get("/numbers/rand", (req, res) => {
  res.json({
    numbers: [5, 17, 3, 19, 76, 24, 1, 5, 10, 34, 8, 27, 7],
  });
});

app.listen(4000, () => {
  console.log("Port:4000");
});