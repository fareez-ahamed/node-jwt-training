const express = require("express");

const app = express();

app.use(express.json());

app.get("/about-us", (req, res) => {
  res.send(`We are from Amrita`);
});

app.post("/", (req, res) => {
  const { name } = req.body;
  res.send({ message: `Hello ${name}` });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
