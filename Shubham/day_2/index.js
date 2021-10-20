const express = require("express");
var expressLayouts = require("express-ejs-layouts");
const app = express();

const path = require("path");

const port = "8000";

//for using ejs
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("views", "./views");

app.get("/", function (req, res) {
  return res.status(200).sendFile(path.resolve("./a.html"));
});

app.get("/play-with-html", function (req, res) {
  res.render("play-with-html", {
    title: "Play with HTML",
    name: req.query.name ? req.query.name : "World",
  });
});

app.listen(port, function (error) {
  if (error) {
    console.log(error);
  }

  console.log(`Server Running on Port: ${port}`);
});
