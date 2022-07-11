const fs = require("fs");
fs.readFile("hw1.json", "utf-8", function (err, data) {
  if (err) throw err;
  console.log(data);
});
