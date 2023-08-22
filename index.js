const express = require("express");
const { getSecretData, checkCredentials } = require("./data");

const app = express();

app.use(express.json());

app.post("/api/login", (req, res) => {
  const result = checkCredentials(req.body.email, req.body.password);
  if (result) {
    res.send({ token: "I have to send the token here" });
  } else {
    res.status(401).send();
  }
});

app.get("/api/data", (req, res) => {
  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.startsWith("Bearer") === false
  ) {
    res.status(401).send();
    return;
  }
  res.send(getSecretData());
});

app.post("/", (req, res) => {
  const { name } = req.body;
  res.send({ message: `Hello ${name}` });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
