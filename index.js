const express = require("express");

const app = express();

app.get("/about-us", (req, res) => {
  res.send(`We are from Amrita`);
});

app.get("/:name", (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
