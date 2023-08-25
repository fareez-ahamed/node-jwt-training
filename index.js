const express = require("express");
const { getSecretData, checkCredentials } = require("./data");
const { sign, verify } = require("jsonwebtoken");

const app = express();
const secretKey = "213847ksdfkjshdfjkhskjdhf293847skdf";

app.use(express.json());

function generateToken(payload) {
  return sign(payload, secretKey);
}

function verifyToken(token) {
  const result = verify(token, secretKey);
  return result;
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
  const token = req.headers.authorization.substring(7);
  let payload = null;
  try {
    payload = verifyToken(token);
  } catch (e) {
    res.status(401).send();
    return;
  }
  res.send(getSecretData(payload.id));
});

app.post("/", (req, res) => {
  const { name } = req.body;
  res.send({ message: `Hello ${name}` });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
