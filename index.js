const express = require("express");
const { getSecretData, checkCredentials } = require("./data");
const { sign } = require("jsonwebtoken");

const app = express();
const secretKey = "213847ksdfkjshdfjkhskjdhf293847skdf";

app.use(express.json());

function generateToken(payload) {
  return sign(payload, secretKey);
}
}

app.post("/api/login", (req, res) => {
  const result = checkCredentials(req.body.email, req.body.password);
  if (result) {
    res.send({ token: generateToken(result) });
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
