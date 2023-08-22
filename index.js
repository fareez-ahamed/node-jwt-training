const http = require("http");

const server = http.createServer((req, res) => {
  const name = req.url.substring(req.url.lastIndexOf("/") + 1);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Hello ${name}`);
});

server.listen(3000, () => {
  console.log("Listening on port 3000");
});
