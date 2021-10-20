const express = require("express");

const app = express();

const port = "8000";

app.get("/", function (req, res) {
  var name = "World";
  if (req.query.name) {
    name = req.query.name;
  }

  return res.status(200).send(`Hello ${name}`);
});

app.get("/area", function (req, res) {
  var result = 0;
  if (req.query.x && req.query.y) {
    result = parseInt(req.query.x) * parseInt(req.query.y);
  }
  return res.status(200).send(`Area=${result}`);
});

app.listen(port, function (error) {
  if (error) {
    console.log(error);
  }

  console.log(`Server Running on Port: ${port}`);
});
