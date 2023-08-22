const express = require("express");
const { getSecretData } = require("./data");

const app = express();

app.use(express.json());

app.get("/api/data", (_, res) => {
  res.send(getSecretData());
});

app.post("/", (req, res) => {
  const { name } = req.body;
  res.send({ message: `Hello ${name}` });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
