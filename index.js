const fs = require("fs");

fs.readFile("lorem.txt", (err, data) => {
  if (err) {
    console.log("Got error", err);
    return;
  }
  console.log(data.toString());
});
