const express = require("express");
const app = express();

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});

// req is the Request object, res is the Response object
// (these are just variable names, they can be anything but it's a convention to call them req and res)
app.get("/", function (req, res) {
  res.send("Hello world!");
});

app.get("/node", function (req, res) {
  res.send("This is the node response");
});

app.get("/chocolate", function (req, res) {
  res.send("Mm chocolate :O");
});

app.get("/codeyourfuture", function (req, res) {
  res.send("CYF is great to learn many things!");
});